import { useState } from 'react'
import Card from '../../../Design/Card/Card'
import Container from '../../../Design/Container/Container'
import { ApiRoutes,  HomeRoutes } from '../../../../core/routing'
import useFetch from '../../../../core/hooks/useFetch'
import { useAuthContext } from '../../Auth/AuthProvider'
import AppFooter from '../../AppFooter/AppFooter'
import HeaderSpacer from '../../../Design/HeaderSpacer/HeaderSpacer'
import LoadingIndicator from '../../../Design/LoadingIndicator/LoadingIndicator'
import useTitle from '../../../../core/hooks/useTitle'
import { useTranslation } from 'react-i18next'

const PropertiesOverviewScreen = ({type}) => {

    const { t } = useTranslation();

    const { auth } = useAuthContext();

    let GuestRoute;
    let UserRoute;
    let title;

    switch (type) {
        case HomeRoutes.Buy:
            GuestRoute = ApiRoutes.BuyProperties
            UserRoute = ApiRoutes.BuyPropertiesWithLocation
            title = t('properties.buy properties')
            break;
        case HomeRoutes.Rent:
            GuestRoute = ApiRoutes.RentProperties
            UserRoute = ApiRoutes.RentPropertiesWithLocation
            title = t('properties.rent properties')
            break;
        default:
            GuestRoute = ApiRoutes.Properties
            UserRoute = ApiRoutes.PropertiesWithLocation
            title = t('properties.all properties')
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

    console.log(data);


  return (
    <>
    <HeaderSpacer />
    {
       !data || data.length === 0 ?
        <div className="w-full">
            <div className="text-center">
                <h1>{t('properties.overview.no properties')}</h1>
            </div>
        </div>
        :
       <>
        <Container>
            <div className="flex flex-wrap">
                {!isLoading && data && data.map( (property) => (
                    <Card
                    property={property}
                    toggleLike={handleLike}
                    />
                    ))}
            </div>
        </Container>
        <AppFooter />
        </>
    }
</>

  )
}

export default PropertiesOverviewScreen