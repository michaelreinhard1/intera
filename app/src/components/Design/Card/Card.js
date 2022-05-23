import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import * as MaterialDesign from "react-icons/md";
import './Card.scss'
import { PropertyRoutes, route } from '../../../core/routing';
const Card = ({image, id, profilePicture, name, description, adress, payment, area, price, type,city, bedrooms, bathrooms, owner, year, phoneNumber}) => {

  let typeColor;
  switch (type) {
      case 'apartment':
          typeColor = 'bg-orange-200 text-orange-800';
          break;
      case 'house':
          typeColor = 'bg-blue-200 text-blue-800';
          break;
      case 'villa':
          typeColor = 'bg-green-200 text-green-800';
          break;
      case 'duplex':
          typeColor = 'bg-purple-200 text-purple-800';
          break;
      default:
          typeColor = 'bg-orange-200 text-orange-800';
          break;
  }

  return (
    // <div className=" w-1/3">
    //     <div className="flex items-center justify-center">
    //         <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
    //             <div className="bg-white shadow-md rounded-lg overflow-hidden">
    //                 <div className="bg-cover bg-center h-56 overflow-hidden relative">
    //                     <Button onClick={handleLike} className="flex justify-end absolute top-8 right-8">
    //                         <svg className={`h-6 w-6 ${liked ? 'text-red-500 fill-red-500' : 'text-white fill-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //                             <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
    //                         </svg>
    //                     </Button>
    //                     <img className='p-4' src={`${process.env.REACT_APP_PUBLIC_URL}/images/${image}`} alt={name} />
    //                 </div>
    //                 <div className="p-4">
    //                     <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{name} • {year}</p>
    //                     <p className="text-3xl text-gray-900">{price}</p>
    //                     {/* if there is no city display the message that you need to be logged in to see the loaciton */}
    //                     {city && <p className="text-gray-700">{city}</p>}
    //                     {!city && <p className="text-gray-700 blur-sm select-none">XXXX XXXX XXXX</p>}
    //                 </div>
    //                 <div className="flex p-4 border-t border-gray-300 text-gray-700">
    //                     <div className="flex-1 inline-flex items-center">
    //                         <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //                             <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
    //                         </svg>
    //                         <p><span className="text-gray-900 font-bold">{bedrooms}</span> {t('property.bedrooms')}</p>
    //                     </div>
    //                     <div className="flex-1 inline-flex items-center">
    //                         <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //                             <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
    //                         </svg>
    //                         <p><span className="text-gray-900 font-bold">{bathrooms}</span> {t('property.bathrooms')}</p>
    //                     </div>
    //                 </div>
    //                 <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
    //                     <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">{t('property.realtor')}</div>
    //                     <div className="flex items-center pt-2">
    //                         <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3">
    //                             <img src={`
    //                             ${profilePicture ? `${process.env.REACT_APP_PUBLIC_URL}/images/${profilePicture}` : `${process.env.REACT_APP_PUBLIC_URL}/images/profile-picture-placeholder.jpg`}
    //                             `} alt="profile" className="w-full h-full rounded-full" />
    //                         </div>
    //                         <div>
    //                             <p className="font-bold text-gray-900">{owner}</p>
    //                             <p className="text-sm text-gray-700">{phoneNumber}</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 ">
    <Link to={route(PropertyRoutes.Detail, { id: id, })} className="c-card block bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-all">
    <div className="relative pb-48 overflow-hidden">
      <img className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-all duration-300	" src={`${process.env.REACT_APP_PUBLIC_URL}/images/${image}`} alt={name} />
    </div>
    <div className="p-4">
      <span className={`inline-block px-2 py-1 leading-none rounded-full font-semibold uppercase tracking-wide text-xs ${typeColor}`}>{type}</span>
      <h2 className="mt-2 mb-2 text-lg text-gray-900 font-bold">{name}</h2>
      <p className="text-sm">{description}</p>
      <div className="mt-3 flex items-center">
        <span className="font-bold text-gray-900 text-xl">{price}{payment === 'rent' ? <span className="text-sm text-gray-600"> / {t('property.month')}</span> : null}</span>
      </div>
    </div>
    <div className="p-4 border-t border-b text-md text-gray-700">
      <span className="flex items-center mb-1">
        <i className="mr-2 text-gray-900">
            <MaterialDesign.MdOutlinePinDrop />
        </i>{city}
      </span>
      <span className="flex items-center mb-1">
        <i className="mr-2 text-gray-900">
            <MaterialDesign.MdBed />
        </i> {bedrooms} {t('property.bedrooms')}
      </span>
      <span className="flex items-center">
      <i className="mr-2 text-gray-900">
            <MaterialDesign.MdOutlineBathtub />
        </i> {bathrooms} {t('property.bathrooms')}
      </span>
      <span className="flex items-center">
      <i className="mr-2 text-gray-900">
            <MaterialDesign.MdSquareFoot />
        </i> {area}
      </span>
    </div>
    <div className="px-4 pt-3 pb-4 ">
        <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">{t('property.realtor')}</div>
        <div className="flex items-center pt-2">
            <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3">
                <img src={`
                ${profilePicture ? `${process.env.REACT_APP_PUBLIC_URL}/images/${profilePicture}` : `${process.env.REACT_APP_PUBLIC_URL}/images/profile-picture-placeholder.jpg`}
                `} alt="profile" className="w-full h-full rounded-full" />
            </div>
            <div>
                <p className="font-bold text-gray-900">{owner}</p>
                <p className="text-sm text-gray-700">{phoneNumber}</p>
            </div>
        </div>
    </div>
  </Link>
  </div>

  )
}

export default Card