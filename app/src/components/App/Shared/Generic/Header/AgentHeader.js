import { t } from 'i18next';
import React from 'react'
import { AgentRoutes, HomeRoutes } from '../../../../../core/routing';
import NavBar from '../../../../Design/NavBar/NavBar';

const AgentHeader = () => {

    const [isOpen, setIsOpen] = React.useState(false);

	const toggleHamburger = () => {
			setIsOpen(!isOpen);
	}


    const items = [
        {
            label: t('navigation.properties'),
            href: AgentRoutes.Properties
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

export default AgentHeader