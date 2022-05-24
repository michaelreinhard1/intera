import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import useFetch from '../../../../../../core/hooks/useFetch';
import { ApiRoutes } from '../../../../../../core/routing';
import LoadingIndicator from '../../../../../Design/LoadingIndicator/LoadingIndicator';
import { useAuthContext } from '../../../AuthProvider';

const UserAddLayout = () => {

    const { id } = useParams();

    const { auth } = useAuthContext();

    console.log(`${ApiRoutes.User}${id}`);



    // console.log(user);

    // if(isLoading) {
    //     return (
    //         <LoadingIndicator />
    //     )
    // }


  return (
    <>
        {/* {error && <h1>Error</h1>} */}
        {/* {user && ( */}
            <Outlet context={{  }} />
        {/* )} */}
    </>

  )
}

export default UserAddLayout