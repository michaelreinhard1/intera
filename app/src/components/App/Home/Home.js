import React from 'react'
import './Home.scss'
import Container from '../../Design/Container/Container'
import useTitle from '../../../core/hooks/useTitle';
import { t } from 'i18next';
import Footer from '../../Design/Footer/Footer';
import AppFooter from '../AppFooter/AppFooter';

const Home = () => {
useTitle(t('home.title'));

  return (
    <>
        {/* Make a landing page image with a big title on the left with a button and an image on the right */}
            <div className="Home w-full h-screen">
              <div className='Home__Banner h-[800px]  flex items-end justify-center w-full '>
               <div className="Search w-4/6 bg-white rounded shadow-md translate-y-1/2">
                  <Container>
                      <div className="SearchContainer flex h-max p-8">
                        <div className="SearchVariables flex justify-between gap-x-10">
                          <div className="City w-auto">
                            <p className='pb-4'>Select a city</p>
                              <select name="city" id="" className='bg-sky-50 rounded p-3'>
                                  <option disabled value="">Select a city</option>
                                  <option value="">Paris</option>
                                  <option value="">Lyon</option>
                                  <option value="">Marseille</option>
                                  <option value="">Bordeaux</option>
                                  <option value="">Lille</option>
                                  <option value="">Lyon</option>
                                  <option value="">Marseille</option>
                              </select>
                          </div>
                          <div className="Type w-auto">
                            <p className='pb-4'>Type</p>
                              <select name="type" id="" className='bg-sky-50 rounded p-3'>
                                  <option disabled value="">Type</option>
                                  <option value="">House</option>
                                  <option value="">Apartment</option>
                                  <option value="">Flat</option>
                                  <option value="">Studio</option>
                                  <option value="">Garage</option>
                                  <option value="">Parking</option>
                              </select>
                          </div>
                          <div className="Price w-auto">
                            <p className='pb-4'>Price</p>
                              <select name="price" id="" className='bg-sky-50 rounded p-3'>
                                  <option disabled value="">Price</option>
                                  <option value="">€0 - €100.000</option>
                                  <option value="">€100.000 - €200.000</option>
                                  <option value="">€200.000 - €300.000</option>
                                  <option value="">€300.000 - €400.000</option>
                                  <option value="">€400.000 - €500.000</option>
                                  <option value="">€500.000 - €600.000</option>
                                  <option value="">€600.000 - €700.000</option>
                                  <option value="">€700.000 - €800.000</option>
                                  <option value="">€800.000 - €900.000</option>
                                  <option value="">€900.000 - €1.000.000</option>
                                  <option value="">€1.000.000 +</option>
                              </select>
                           </div>
                        </div>
                      </div>
                  </Container>
               </div>
              </div>
            </div>

            <AppFooter />

    </>
  )
}

export default Home