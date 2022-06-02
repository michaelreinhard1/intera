import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import * as MaterialDesign from "react-icons/md";
import './Card.scss'
import { HomeRoutes, PropertyRoutes, route } from '../../../core/routing';
const Card = ({image, id, profilePicture, name, description, adress, payment, area, price, type,city, bedrooms, bathrooms, owner, year, phoneNumber, toggleLike}) => {

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
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 ">
    <Link to={route(HomeRoutes.Property, { id: id, })} className="c-card block bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-all">
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