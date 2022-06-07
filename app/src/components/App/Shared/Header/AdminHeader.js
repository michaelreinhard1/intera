import { t } from 'i18next';
import React from 'react'
import { AgencyRoutes, HomeRoutes, PropertyRoutes, UserRoutes } from '../../../../core/routing';
import NavBar from '../../../Design/NavBar/NavBar';

const AdminHeader = () => {

    const [isOpen, setIsOpen] = React.useState(false);

	const toggleHamburger = () => {
			setIsOpen(!isOpen);
	}


    const items = [
        {
            label: t('navigation.users'),
            href: UserRoutes.Index
        },
        {
            label: t('navigation.properties'),
            href: PropertyRoutes.Index
        },
        {
            label: t('navigation.agencies'),
            href: AgencyRoutes.Index
        },
    ]

    const buttons = [
        {
            label: t('buttons.back to home'),
            color: 'primary',
            href: HomeRoutes.Index
        },

    ]


  return (
    <NavBar navItems={items} buttons={buttons} isOpen={isOpen} toggleHamburger={toggleHamburger} />
  )
}

export default AdminHeader