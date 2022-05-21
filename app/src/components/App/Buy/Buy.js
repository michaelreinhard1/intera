import React from 'react'
import Card from '../../Design/Card/Card'
import Container from '../../Design/Container/Container'
import { ApiRoutes } from '../../../core/routing'
import useFetch from '../../../core/hooks/useFetch'
import { formatPrice } from '../../../core/modules/users/utils'
import { DotPulse } from '@uiball/loaders'
import { useState } from 'react'

const Buy = () => {


    const {
        data,
        error,
        isLoading,
        invalidate,
    } = useFetch( ApiRoutes.Properties );


    console.log(data);

    // const [isLoading, setIsLoading] = useState(true);

    // // Set isLoading to true for 3 seconds
    // setTimeout(() => {
    //     setIsLoading(true);
    // }, 2000);

  return (
    <Container>
        <h1>Buy</h1>

        {/* Create a row with 3 columns using Tailwind */}
        <div className="flex flex-wrap mx-3">
            {/* Create a column with 3 cards using Tailwind */}
            {/* if isLoading */}
            {isLoading && (
                <div className="z-50 absolute absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
  )
}

export default Buy