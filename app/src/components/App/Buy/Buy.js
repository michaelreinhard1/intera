import React from 'react'
import Card from '../../Design/Card/Card'
import Container from '../../Design/Container/Container'
import { ApiRoutes } from '../../../core/routing'
import useFetch from '../../../core/hooks/useFetch'
import { formatPrice } from '../../../core/modules/users/utils'
import { DotPulse } from '@uiball/loaders'
import { useState } from 'react'
import { useAuthContext } from '../Auth/AuthProvider'
import Banner from '../../Design/Alerts/Banner'
import { t } from 'i18next'

const Buy = () => {

    // CHeck if user is authenticated
    const { auth } = useAuthContext();

    const { data, isLoading } = useFetch(auth ? ApiRoutes.PropertiesWithLocation : ApiRoutes.Properties);

  return (
      <>
    {!auth && <Banner message={t('fields.you need to be logged in to see the location')} className={'absolute top-28 w-full'} />}
    <Container>
        <h1>Buy</h1>

        {/* If no auth then show banner */}

        {/* Create a row with 3 columns using Tailwind */}
        <div className="flex flex-wrap mx-3">
            {/* Create a column with 3 cards using Tailwind */}
            {/* if isLoading */}
            {isLoading && (
                <div className="z-50 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <DotPulse size={50} color="#231F20" />
                </div>
            )}
            {/* else */}
            {!isLoading && data && data.map( (property) => (

                <Card key={property.id}
                image={property.image}
                name={property.name}
                year={property.year}
                description={property.description}
                bathrooms={property.bathrooms}
                bedrooms={property.bedrooms}
                price={formatPrice(property.price)}
                owner={property.owner}
                type={property.type}
                location={property.location}

                />
            ))}
        </div>

    </Container>
    </>

  )
}

export default Buy