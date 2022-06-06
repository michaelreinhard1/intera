import { useState } from 'react'
import Card from '../../../Design/Card/Card'
import Container from '../../../Design/Container/Container'
import { ApiRoutes,  HomeRoutes,  PropertyRoutes } from '../../../../core/routing'
import useFetch from '../../../../core/hooks/useFetch'
import { useAuthContext } from '../../Auth/AuthProvider'
import AppFooter from '../../AppFooter/AppFooter'
import HeaderSpacer from '../../../Design/HeaderSpacer/HeaderSpacer'
import LoadingIndicator from '../../../Design/LoadingIndicator/LoadingIndicator'
import useTitle from '../../../../core/hooks/useTitle'
import { t } from 'i18next'
import { formatArea, formatPrice } from '../../../../core/modules/properties/utils'

const PropertiesOverviewScreen = ({type}) => {

    const { auth } = useAuthContext();

    let GuestRoute;
    let UserRoute;
    let title;


    switch (type) {
        case HomeRoutes.Buy:
            GuestRoute = ApiRoutes.BuyProperties
            UserRoute = ApiRoutes.BuyPropertiesWithLocation
            title = t('property.buy properties')
            break;
        case HomeRoutes.Rent:
            GuestRoute = ApiRoutes.RentProperties
            UserRoute = ApiRoutes.RentPropertiesWithLocation
            title = t('property.rent properties')
            break;
        default:
            GuestRoute = ApiRoutes.Properties
            UserRoute = ApiRoutes.PropertiesWithLocation
            title = t('property.all properties')
    }

    useTitle(title);

    const {  isLoading, data } = useFetch(auth ? UserRoute : GuestRoute);

    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    }


    if(isLoading) {
        return (
            <LoadingIndicator />
        )
    }


  return (
      <>
        <HeaderSpacer />
        <Container>

        <div className="flex flex-wrap">
            {!isLoading && data && data.map( (property) => (
                <Card key={property.id}
                id={property.id}
                address={property.address}
                image={property.image}
                name={property.name}
                year={property.year}
                description={property.description}
                bathrooms={property.bathrooms}
                bedrooms={property.bedrooms}
                price={formatPrice(property.price)}
                area={formatArea(property.area)}
                payment={property.payment}
                owner={property.owner}
                type={property.type}
                city={property.city}
                toggleLike={handleLike}
                />
            ))}
        </div>
    </Container>
    <AppFooter />
    </>

  )
}

export default PropertiesOverviewScreen