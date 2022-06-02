import React from 'react'
import Footer from '../../Design/Footer/Footer'
import logo from '../../../assets/icons/Logo.svg'
import { HomeRoutes, PropertyRoutes } from '../../../core/routing'
import { t } from 'i18next'

const AppFooter = () => {

  const sections = [
    {
      title: t('navigation.about'),
      links: [
        {
          title: t('navigation.about us'),
          href: HomeRoutes.About,
        },
        {
          title: t('navigation.contact'),
          href: HomeRoutes.Contact,
        },
      ],
    },
    {
      title: t('navigation.services'),
      links: [
        {
          title: t('navigation.buy'),
          href: HomeRoutes.Buy,
        },
        {
          title: t('navigation.rent'),
          href: HomeRoutes.Rent,
        },
      ],
    },
    {
      title: t('navigation.resources'),
      links: [
        {
          title: t('navigation.terms of use'),
          href: HomeRoutes.Terms,
        },
        {
          title: t('navigation.privacy policy'),
          href: HomeRoutes.Privacy,
        },
      ],
    },
  ]



  return (
    <Footer
      companyName="Intera"
      logo={logo}
      sections={sections}
    />
  )
}

export default AppFooter