import React from 'react'
import './Header.scss'
import { useAuthContext } from "../Auth/AuthProvider";
import { useTranslation } from "react-i18next";
import NavBar from '../../Design/NavBar/NavBar';
import { AuthRoutes, HomeRoutes, AdminRoutes, PropertyRoutes, UserRoutes, AgentRoutes } from '../../../core/routing';
import { isAdmin, isAgent } from '../../../core/modules/users/utils';
import { useLocation, useParams } from 'react-router-dom';

const Header = () => {

	const { t } = useTranslation();

	const { logout } = useAuthContext();

	const { auth } = useAuthContext();

	const [isOpen, setIsOpen] = React.useState(false);

	const toggleHamburger = () => {
			setIsOpen(!isOpen);
	}

	let items = [
		{
			label: t('navigation.buy'),
			href: HomeRoutes.Buy
		},
		{
			label: t('navigation.rent'),
			href: HomeRoutes.Rent
		},
		{
			label: t('navigation.saved'),
			href: HomeRoutes.Saved
		},
		{
			label: t('navigation.contact'),
			href: HomeRoutes.Contact
		},
	]

	let buttons = [
		{
			label: t('buttons.login'),
			color: 'secondary',
			href: AuthRoutes.Login
		},
		{
			label: t('buttons.register'),
			color: 'primary',
			className: ' ',
			href: AuthRoutes.Register
		},
	];

	if (auth) {
		buttons = [
			{
				label: 'My account',
				color: 'primary',
				href: AuthRoutes.Profile
			},
			{
				label: t('buttons.logout'),
				className: ' bg-gray-50 hover:bg-gray-100 hover:text-red-700 text-gray-900',
				onClick: logout
			},
		]

	if (isAdmin(auth.user)) {
		buttons = [
			{
				label: 'Dashboard',
				color: 'primary',
				href: UserRoutes.Index
			},
			{
				label: t('buttons.logout'),
				className: ' bg-gray-50 hover:bg-gray-100 hover:text-red-700 text-gray-900',
				onClick: logout
			},
		]

    }
	if (isAgent(auth.user)) {
		buttons = [
			{
				label: 'Dashboard',
				color: 'primary',
				href: AgentRoutes.Properties
			},
			{
				label: t('buttons.logout'),
				className: ' bg-gray-50 hover:bg-gray-100 hover:text-red-700 text-gray-900',
				onClick: logout
			},
		]

    }

}

		return (
			<NavBar navItems={items} buttons={buttons} isOpen={isOpen} toggleHamburger={toggleHamburger} />
  )
}

export default Header