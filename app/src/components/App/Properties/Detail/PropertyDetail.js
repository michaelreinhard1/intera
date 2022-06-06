import { t } from 'i18next';
import {useState} from 'react'
import { useOutletContext } from 'react-router-dom';
import Container from '../../../Design/Container/Container';
import HeaderSpacer from '../../../Design/HeaderSpacer/HeaderSpacer';
import AppFooter from '../../AppFooter/AppFooter';
import * as MaterialDesign from "react-icons/md";
import Button from '../../../Design/Button/Button';
import { useAuthContext } from '../../Auth/AuthProvider';
import Banner from '../../../Design/Alerts/Banner';
import { AuthRoutes } from '../../../../core/routing';
import { formatArea, formatPrice } from '../../../../core/modules/properties/utils';
import { getImagePath } from '../../../../core/helpers/api';

const PropertyDetail = () => {

  const { auth } = useAuthContext();

  const { property } = useOutletContext();

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <HeaderSpacer />
      <Container>
          <div className="flex gap-10">
              <div className="w-full lg:w-1/2">
                  <img src={getImagePath(property.image)} alt={property.title} className="rounded-lg"/>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col flex-between h-full">
                <div className='h-1/2'>
                  <div className='flex justify-between'>
                    <h1 className='text-2xl mb-5 font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate'>{t('property.overview')}</h1>
                    <h2 className='text-2xl mb-5 font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate'>{formatPrice(property.price)}{property.payment === 'rent' ? <span className="text-sm text-gray-600"> / {t('property.month')}</span> : null}</h2>
                  </div>
                  <span className="flex items-center mb-1">
                    <i className="mr-2 text-gray-900">
                        <MaterialDesign.MdBed />
                    </i> {property.bedrooms} {t('property.bedrooms')}
                  </span>
                  <span className="flex items-center mb-1">
                      <i className="mr-2 text-gray-900">
                          <MaterialDesign.MdOutlineBathtub />
                      </i>{property.bathrooms} {t('property.bathrooms')}
                  </span>
                  <span className="flex items-center mb-1">
                      <i className="mr-2 text-gray-900">
                          <MaterialDesign.MdSquareFoot />
                      </i>{formatArea(property.area)}
                  </span>
                  {!auth ?
                      <>
                      <span className="flex items-center mb-1">
                      <i className="mr-2 text-gray-900">
                          <MaterialDesign.MdOutlinePinDrop />
                      </i>{property.zip} {property.city}
                      </span>
                      <Banner title={t('banner.informational message')} message={t('fields.you need to be logged in to see the full address')}
                      link={{ title: t('navigation.login here'), href: AuthRoutes.Login }}/>
                      </>
                  :
                  <span className="flex items-center mb-1">
                  <i className="mr-2 text-gray-900">
                      <MaterialDesign.MdOutlinePinDrop />
                  </i>{property.address}, {property.zip} {property.city}
                  </span>
                  }
                </div>

                <div className='h-1/2 flex items-center'>

                  <Button className={'mt-auto w-fit py-2'} color={'primary'}>
                    {t('property.contact agent')}
                  </Button>
                  {/* If like is true show buttons */}
                  {!liked ?
                  <Button onClick={handleLike} className=' border w-fit lg:flex items-center justify-between gap-2 leading-none rounded-lg font-semibold  '>
                  <>
                    {(t('property.save'))}
                    {/* <MaterialDesign.MdCheck  /> */}
                  </>
                  </Button>
                  :
                  <>
                  <Button onClick={handleLike} className='py-2 flex w-fit lg:flex items-center justify-between border gap-2 leading-none rounded-lg font-semibold '>
                    <MaterialDesign.MdCheck color='#51cf96' />
                    {(t('property.saved'))}
                  </Button>

                  </>
                  }
                </div>


              </div>
          </div>
          <div>
            <h1 className='text-2xl mb-5 font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate'>{t('property.description')}</h1>
          </div>
      </Container>
      <AppFooter />
    </>

  );
}

export default PropertyDetail