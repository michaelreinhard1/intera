import { useState } from 'react'
import Card from '../../../Design/Card/Card'
import Container from '../../../Design/Container/Container'
import { ApiRoutes,  PropertyRoutes } from '../../../../core/routing'
import useFetch from '../../../../core/hooks/useFetch'
import { formatArea, formatPrice } from '../../../../core/modules/users/utils'
import { useAuthContext } from '../../Auth/AuthProvider'
import AppFooter from '../../AppFooter/AppFooter'
import HeaderSpacer from '../../../Design/HeaderSpacer/HeaderSpacer'
import LoadingIndicator from '../../../Design/LoadingIndicator/LoadingIndicator'

const PropertiesOverviewScreen = ({type}) => {

    const { auth } = useAuthContext();




    let GuestRoute;
    let UserRoute;

    switch (type) {
        case PropertyRoutes.Buy:
            GuestRoute = ApiRoutes.BuyProperties
            UserRoute = ApiRoutes.BuyPropertiesWithLocation
            break;
        case PropertyRoutes.Rent:
            GuestRoute = ApiRoutes.RentProperties
            UserRoute = ApiRoutes.RentPropertiesWithLocation
            break;
        default:
            GuestRoute = ApiRoutes.Properties
            UserRoute = ApiRoutes.PropertiesWithLocation
    }

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
                adress={property.adress}
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
                />
            ))}
        </div>
    </Container>
    <AppFooter />
    </>

  )
}

export default PropertiesOverviewScreen