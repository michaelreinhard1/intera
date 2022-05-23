import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import useFetch from '../../../../core/hooks/useFetch';
import { ApiRoutes } from '../../../../core/routing';
import LoadingIndicator from '../../../Design/LoadingIndicator/LoadingIndicator';
import { useAuthContext } from '../../Auth/AuthProvider';

const PropertyDetailLayout = () => {

    const { id } = useParams();

    const { auth } = useAuthContext();

    const { isLoading, data: property, invalidate, error } = useFetch(auth ?  `${ApiRoutes.PropertyWithLocation}${id}`: `${ApiRoutes.Property}${id}`);

    const handleUpdate = () => {
        invalidate();
    };

    if(isLoading) {
        return (
            <LoadingIndicator />
        )
    }

    return (
        <>
            {error && <h1>Error</h1>}
            {property && (
                <Outlet context={{ property, onProjectUpdate: handleUpdate }} />
            )}
        </>
    )
}

export default PropertyDetailLayout