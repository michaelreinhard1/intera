import React from 'react'
import { AdminRoutes, HomeRoutes } from '../../../core/routing'
import NavBar from '../../Design/NavBar/NavBar'

const AdminHeader = () => {

    const [isOpen, setIsOpen] = React.useState(false);

	const toggleHamburger = () => {
			setIsOpen(!isOpen);
	}


    const items = [
        {
            label: 'Users',
            href: AdminRoutes.Users
        },
        {
            label: 'Properties',
            href: AdminRoutes.Properties
        },
        {
            label: 'Agents',
            href: AdminRoutes.Agents
        },
        {
            label: 'Settings',
            href: AdminRoutes.Settings
        },
    ]

    const buttons = [
        {
            label: 'Backt to Home',
            color: 'primary',
            href: HomeRoutes.Index
        },

    ]


  return (
    <NavBar navItems={items} buttons={buttons} isOpen={isOpen} toggleHamburger={toggleHamburger} />
  )
}

export default AdminHeader