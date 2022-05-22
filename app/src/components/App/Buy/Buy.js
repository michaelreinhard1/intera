import React from 'react'
import Card from '../../Design/Card/Card'
import Container from '../../Design/Container/Container'
import { ApiRoutes, AuthRoutes } from '../../../core/routing'
import useFetch from '../../../core/hooks/useFetch'
import { formatPrice } from '../../../core/modules/users/utils'
import { DotPulse } from '@uiball/loaders'
import { useAuthContext } from '../Auth/AuthProvider'
import Banner from '../../Design/Alerts/Banner'
import { t } from 'i18next'
import Footer from '../../Design/Footer/Footer'
import AppFooter from '../AppFooter/AppFooter'

const Buy = () => {

    // CHeck if user is authenticated
    const { auth } = useAuthContext();

    const { data, isLoading } = useFetch(auth ? ApiRoutes.PropertiesWithLocation : ApiRoutes.Properties);

  return (
      <>
    <Container className={'pt-32'}>
        {!auth &&
        <div className='m-auto rounded-lg flex justify-center'>
            <Banner title={t('banner.informational message')} message={t('fields.you need to be logged in to see the location')}
            link={{ title: t('navigation.login here'), href: AuthRoutes.Login }}/>
        </div>

        }
        <div className="flex flex-wrap justify-between">
            {isLoading && (
                <div className="z-50 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <DotPulse size={50} color="#231F20" />
                </div>
            )}
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
        <AppFooter />
    </Container>
    </>

  )
}

export default Buy