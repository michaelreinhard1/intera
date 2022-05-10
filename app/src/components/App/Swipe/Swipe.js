import { useEffect, useState } from 'react'
import useMutation from '../../../core/hooks/useMutation'
import Button from '../../Design/Button/Button'
import Card from '../../Design/Card/Card'
import './Swipe.scss'
import useFetch from '../../../core/hooks/useFetch'
import LoadingIndicator from '../../Design/LoadingIndicator/LoadingIndicator';
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

const Swipe = () => {

  const { mutate } = useMutation();

  const { isLoading, data, invalidate } = useFetch('/banks');

  const [item, setItem] = useState([]);

  const [counter, setCounter] = useState(0);

  const [noData, setNoData] = useState(false);

  useEffect(() => {
    
    if (!data) {
      setNoData(true);
    }

    if (!isLoading && data && data._eventsCount !== 0) {
      setNoData(false);
      setItem(data[counter]);

      if (counter === data.length) {
        invalidate();
        setNoData(true);
        setCounter(0);
      }
    }
  }, [data, isLoading , counter, invalidate]);

  const swipe = (type) => {

      mutate(`${process.env.REACT_APP_API_URL}/${type}`, {
        method: "POST",
        data: {
          ...item
        },
        onSuccess: () => {
          console.log(`Succesfully ${type}`);
          console.log(item);
        },
      })
      .catch(() => {
        console.log('Error');
      });

    setCounter(counter + 1);
    setItem(data[counter]);
  }

  return (

    <>
      <div className="Swipe">

    {isLoading
      ? <LoadingIndicator />
      : 
      noData
      ? 
      <div className="no-data">
        <h1>No Data</h1>
      </div>
      :
      
          <Card key={item.id} image={item.logo} name={item.coin_name} bio={item.acronym}> 
            <div className="Swipe__Buttons">
                <Button color='alert' disabled={isLoading} onClick={() => swipe('disliked')}><AiFillDislike /></Button>
                <Button disabled={isLoading} onClick={() => swipe('liked')}><AiFillLike /></Button>
            </div>
          </Card>

      }
      
      </div>

    </>
  )
}

export default Swipe

