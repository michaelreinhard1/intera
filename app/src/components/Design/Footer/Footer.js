import React from 'react'
import { Link } from 'react-router-dom'
import { HomeRoutes } from '../../../core/routing'
import HeaderSpacer from '../HeaderSpacer/HeaderSpacer'

const Footer = ({logo, alt, sections, socials = [], companyName}) => {

  return (
      <>
    <HeaderSpacer />
    <footer className="
    container z-50 w-full px-4 py-4  bg-white shadow-sm
    ">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <Link to={HomeRoutes.Index} className="flex items-center">
                <img src={logo} className="mr-3 h-8" alt={alt}/>
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
            </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                {sections.map((section, index) => (
                        <div key={index}>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{section.title}</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                        {
                                section.links.map((item, index) => (
                                        <li key={index} className="mb-4">
                                            <Link to={item.href} className="hover:underline">{item.title}</Link>
                                        </li>
                                ))
                            }
                        </ul>
                    </div>
            ))}
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline">{companyName}</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

            { socials.map((item, index) => (
            <Link key={index} href={item.href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                {item.icon}
            </Link>
            ))
            }
        </div>
    </div>
</footer>
</>

  )
}

export default Footer