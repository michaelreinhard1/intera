import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import useFetch from '../../../../../../core/hooks/useFetch';
import { ApiRoutes } from '../../../../../../core/routing';
import LoadingIndicator from '../../../../../Design/LoadingIndicator/LoadingIndicator';
import { useAuthContext } from '../../../AuthProvider';

const UserEditLayout = () => {

    const { id } = useParams();

    const { auth } = useAuthContext();

    const { isLoading, data: user, error } = useFetch(`${ApiRoutes.User}${id}`);

    console.log(`${ApiRoutes.User}${id}`);

    console.log(user);

    if(isLoading) {
        return (
            <LoadingIndicator />
        )
    }



  return (
    <>
        {/* {error && <h1>Error</h1>} */}
        {/* {user && ( */}
            <Outlet context={{ user }} />
        {/* )} */}
    </>

  )
}

export default UserEditLayout