import React, { useEffect, useState } from 'react'
import useFetch from '../../../core/hooks/useFetch';
import Card from '../../Design/Card/Card';
import LoadingIndicator from '../../Design/LoadingIndicator/LoadingIndicator';
import useMutation from '../../../core/hooks/useMutation'
import './Likes.scss'
import Button from '../../Design/Button/Button';

const Likes = () => {

  const { isLoading, data, invalidate } = useFetch('/likes');

  const { mutate } = useMutation();

  const [noData, setNoData] = useState(false);

  useEffect(() => {
    if (!data){
        setNoData(true);
      }
    if (!isLoading && data) {
      setNoData(false);
    }
}, [data, isLoading]);

const deleteLike = (item) => {

  mutate(`${process.env.REACT_APP_API_URL}/liked`, {
    method: "DELETE",
    data: {
      item
    },
    onSuccess: () => {
      console.log(`Succesfully deleted ${item.id}`);
      invalidate();
    },
  })
  .catch(() => {
    console.log('Error');
  });


}

return (
      <>
        {isLoading
            ? <LoadingIndicator />
            : 
            noData
            
            ? 
            <div className="no-data">
              {console.log(noData)}
                <h1>No likes yet</h1>
            </div>
            :
            <div className="Likes">
              <h1>Likes</h1>
              <div className="Likes__items">
                {data.map((item) => (
                  <Card image={item.logo} name={item.coin_name} bio={item.acronym} >
                    <Button disabled={isLoading} color='alert' onClick={() => {deleteLike(item)}}>Delete</Button>
                  </Card>

                  ))}
              </div>

            </div> 
  
    }
    </>
  )
}

export default Likes