import { t } from 'i18next';
import {useState} from 'react'
import { useOutletContext } from 'react-router-dom';
import * as MaterialDesign from "react-icons/md";
import useMutation from '../../../../../core/hooks/useMutation';
import HeaderSpacer from '../../../../Design/HeaderSpacer/HeaderSpacer';
import Container from '../../../../Design/Container/Container';
import { getImagePath } from '../../../../../core/helpers/api';
import { formatArea, formatPrice } from '../../../../../core/modules/properties/utils';
import { AuthRoutes } from '../../../../../core/routing';
import Button from '../../../../Design/Button/Button';
import Form from '../../../../Design/Form/Form';
import FormGroup from '../../../../Design/Form/FormGroup';
import Banner from '../../../../Design/Alerts/Banner';
import { useAuthContext } from '../../../Auth/AuthProvider';
import { TransactionTypes } from '../../../../../core/modules/properties/constants';
import AppFooter from '../../../Shared/Generic/AppFooter/AppFooter';
import useTitle from '../../../../../core/hooks/useTitle';

const PropertyDetail = () => {

  const { auth } = useAuthContext();

  const { property } = useOutletContext();

  const [liked, setLiked] = useState(false);
  useTitle(property.name)
  const handleLike = () => {
    setLiked(!liked);
  };

  const [data, setData] = useState({
    email: "",
    subject: "",
    message: ""
  });

  const { isLoading } = useMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    // mutate(`${process.env.REACT_APP_API_URL}/login`, {
    //   method: "POST",
    //   data,
    //   onSuccess: (data) => {
    //         //   login(data);
    //         },
    //       });
  };

  const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value,
    });
  };

  console.log(property.agency);
  const mode = isLoading ? "bg-blue-500" : "";

  return (
    <>
      <HeaderSpacer />
      <Container>
          <h1 className='text-2xl mb-10 font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate'>{property.name}</h1>
          <div className="flex flex-col sm:flex-row gap-10">
              <div className="w-full lg:w-1/2 h-96 overflow-hidden rounded-lg">
                  <img src={getImagePath(property.image)} alt={property.title} className=" object-cover w-full h-full"/>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col flex-between min-h-full">
                <div className='h-max flex flex-col gap-2'>
                  <div className='flex justify-between'>
                    <h2 className='text-2xl mb-5 font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate'>{formatPrice(property.price)}{property.payment === TransactionTypes.Rent ? <span className="text-sm text-gray-600"> / {t('property.month')}</span> : null}</h2>
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
                      <Banner title={t('banner.informational message')} message={t('fields.you need to be logged in to see the agency and the full address')}
                      link={{ title: t('navigation.login here'), href: AuthRoutes.Login }}/>
                      </>
                  :
                  <>
                    <span className="flex items-center mb-1">
                      <i className="mr-2 text-gray-900">
                          <MaterialDesign.MdOutlinePinDrop />
                      </i>{property.address}, {property.zip} {property.city}
                    </span>
                    <span className="flex items-center mb-1">
                      <i className="mr-2 text-gray-900">
                          <MaterialDesign.MdGroup />
                      </i>{property.agency.name}
                    </span>
                    <span className="flex items-center mb-1">
                      <i className="mr-2 text-gray-900">
                          <MaterialDesign.MdEmail />
                      </i>{property.agency.email}
                    </span>
                    <span className="flex items-center mb-1">
                      <i className="mr-2 text-gray-900">
                          <MaterialDesign.MdPhone />
                      </i>{property.agency.phone}
                    </span>
                  </>
                  }
                </div>

                <div className='h-1/2 flex items-end gap-4'>

                  <Button className={'mt-auto w-fit py-2'} color={'primary'}>
                    {t('property.contact agent')}
                  </Button>
                  {/* If like is true show buttons */}
                  {!liked ?
                  <Button  onClick={handleLike} className='py-2 border w-fit lg:flex items-center justify-between gap-2 leading-none rounded-lg font-semibold  '>
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
          <div className='mt-10'>
            <div className='my-5'>

            <h3 className='text-2xl mb-5 font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate'>{t('property.general')}</h3>
                  <div className='grid grid-cols-2 gap-y-5 w-full sm:w-1/2'>
                      <span className='font-bold'>
                        {t('property.type')}
                      </span>
                      <span>
                        {property.type}
                      </span>
                      <span className='font-bold'>
                        {t('property.transaction type')}
                      </span>
                      <span>
                        {property.payment}
                      </span>
                      <span className='font-bold'>
                        {t('property.construction year')}
                      </span>
                      <span>
                        {property.year}
                      </span>
                      <span className='font-bold'>
                        {t('property.total rooms')}
                      </span>
                      <span>
                        {property.rooms}
                      </span>
                      <span className='font-bold'>
                        {t('property.bedrooms')}
                      </span>
                      <span>
                        {property.bedrooms}
                      </span>
                      <span className='font-bold'>
                        {t('property.bathrooms')}
                      </span>
                      <span>
                        {property.bathrooms}
                      </span>
                      <span className='font-bold'>
                        {t('property.floor')}
                      </span>
                      <span>
                        {property.floor}
                      </span>
                      <span className='font-bold'>
                        {t('property.area')}
                      </span>
                      <span>
                        {formatArea(property.area)}
                      </span>
                  </div>
              </div>

            <div className="mt-20">

              <h3 className='text-2xl mb-5 font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate'>{t('property.description')}</h3>
              <p>
                {property.description}
              </p>
            </div>
              <div className='w-full mt-20'>
                <h3 className='text-2xl font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate my-10'>
                  {t('property.contact owner')}
                </h3>
                <Form onSubmit={handleSubmit}>
                  <FormGroup
                  label={t('fields.email')}
                  name='email'
                  type='email'
                  placeholder={t('fields.email')}
                  value={data.email}
                  onChange={handleChange}
                  />
                  <FormGroup
                  label={t('fields.subject')}
                  name='subject'
                  type='text'
                  placeholder={t('fields.subject')}
                  value={data.subject}
                  onChange={handleChange}
                  />
                  <FormGroup
                  label={t('fields.message')}
                  name='message'
                  type='textarea'
                  placeholder={t('fields.write your message')}
                  value={data.message}
                  onChange={handleChange}
                  />
                  <Button color="primary" className={`w-max ml-auto ${mode}`} disabled={isLoading}>{t('fields.send')}</Button>
              </Form>
            </div>

          </div>
      </Container>
      <AppFooter />
    </>

  );
}

export default PropertyDetail