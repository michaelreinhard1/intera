import React from 'react'
import { t } from 'i18next';
import useTitle from '../../../../core/hooks/useTitle';
import Container from '../../../Design/Container/Container';
import AppFooter from '../../Shared/Generic/AppFooter/AppFooter';
import { HomeRoutes } from '../../../../core/routing';
import { Link } from 'react-router-dom';
import Button from '../../../Design/Button/Button';

const Home = () => {
useTitle(t('home.title'));

  return (
    <>
        <div className="mt-[104px]"></div>
                  <div className='relative max-h-[500px] overflow-hidden flex flex-col-reverse'>
                      <div className='sm:absolute sm:top-1/2 sm:left-1/3 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 p-4'>
                        <h1 className='text-2xl sm:text-6xl font-bold whitespace-pre-wrap	'>
                        We'll help you find  <br />your
                        <span className='text-blue-600'>
                          &nbsp;{t('home.landing.dream home')}
                        </span>
                        </h1>
                        <div className='mt-7 text-md'>
                          <p className='whitespace-pre-line'>
                          We're here to provide you with the tools you need to find your perfect
                          home.
                          </p>
                          <p className='whitespace-pre-line'>
                          Our agents are always ready to answer your questions and help you
                          every step of the way.
                          </p>
                        </div>
                        <div className='flex gap-x-3 mt-10'>
                          <Button className='px-10 sm:flex-grow-0 flex-grow text-center' color='primary' href={HomeRoutes.Buy}>
                            {t('home.buy')}
                          </Button>
                          <Button className='px-10 sm:flex-grow-0 flex-grow text-center' color='secondary' href={HomeRoutes.Rent}>
                            {t('home.rent')}
                          </Button>
                        </div>

                      </div>
                      <img className='w-full ' src="images/background.png" alt="" />
                    </div>
                    <Container>
                      <h1 className='text-2xl sm:text-4xl font-bold text-center my-10'>
                        {t('home.see how we can help')}
                      </h1>
                    <div className='grid grid-cols-1 sm:grid-cols-3 h-max gap-10 mt-10 sm:mt-20'>
                      <div className='gap-10 hover:scale-[1.01] transition-all hover:shadow-lg rounded border text-center text-slate-600 p-10 flex flex-col justify-between items-center'>
                        <div className='flex flex-col items-center'>
                          <h5 className='text-xl font-bold text-black mb-5'>
                            {t('home.buy a home')}
                          </h5>
                          <p>
                          We're here to help you find the right home for you
                          </p>
                        </div>
                        <Link to={HomeRoutes.Buy} className='text-blue-600 underline font-medium'>
                            {t('home.buy')}
                        </Link>
                      </div>
                      <div className='gap-10 hover:scale-[1.01] transition-all hover:shadow-lg rounded border text-center text-slate-600 p-10 flex flex-col justify-between items-center'>
                        <div className='flex flex-col items-center'>
                          <h5 className='text-xl font-bold text-black mb-5'>
                            {t('home.rent a home')}
                          </h5>
                          <p>
                          We're here to help you find the right home for you
                          </p>
                        </div>
                        <Link to={HomeRoutes.Rent} className='text-blue-600 underline font-medium'>
                            {t('home.rent')}
                        </Link>
                      </div>
                      <div className='gap-10 hover:scale-[1.01] transition-all hover:shadow-lg rounded border text-center text-slate-600 p-10 flex flex-col justify-between items-center'>
                        <div className='flex flex-col items-center'>
                          <h5 className='text-xl font-bold text-black mb-5'>
                            {t('home.become an agent')}
                          </h5>
                          <p >
                          We're here to help you find the right home for you
                          </p>
                        </div>
                        <Link to={HomeRoutes.Index} className='text-blue-600 underline font-medium'>
                            {t('home.contact us')}
                        </Link>
                      </div>
                    </div>
                    </Container>

                    <div className='bg-slate-100 mt-20 overflow-hidden'>
                      <div className='flex flex-col sm:flex-row p-0 gap-x-24 sm:h-96'>
                      <div className='w-full sm:w-1/2'>
                          <img src="images/home.jpg" className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full sm:w-1/2 flex flex-col justify-center  p-5'>
                          <div>
                            <h2 className=' text-2xl font-bold'>
                              {t("home.let's find the right selling option for you")}
                            </h2>
                            <p className='py-5'>
                              {t("home.we're here to help you find the right home for you")}
                            </p>
                          </div>
                          <Button className='px-10 w-max' color='primary' href={HomeRoutes.Buy}>
                            {t('home.explore')}
                          </Button>
                        </div>
                      </div>
                    </div>
            <AppFooter />
    </>
  )
}

export default Home