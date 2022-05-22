import React from 'react'
import Button from '../../Design/Button/Button';
// import { useAuthContext } from '../AuthContainer';
import './Header.scss'
import { useAuthContext } from "../Auth/AuthProvider";
import { useTranslation } from "react-i18next";
import NavBar from '../../Design/NavBar/NavBar';
import { AuthRoutes, HomeRoutes, AdminRoutes } from '../../../core/routing';
import { isAdmin } from '../../../core/modules/users/utils';

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
		// Rent, Sell, Saved homes, Contact
		{
			label: t('navigation.rent'),
			href: HomeRoutes.Rent
		},
		{
			label: t('navigation.sell'),
			href: HomeRoutes.Sell
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
			className: ' mx-3',
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
				className: ' mx-3',
				href: AuthRoutes.Profile
			},
			{
				label: t('buttons.logout'),
				className: ' bg-gray-50 hover:bg-gray-100 hover:text-red-700 text-gray-900',
				onClick: logout
			},
		]

	if (isAdmin(auth.user)) {
        // items = [
        //     ...items,
        //     {
        //         href: AdminRoutes.Index,
        //         isActive: location.pathname.includes(AdminRoutes.Index),
        //         label: 'Dashboard',
        //     },
        // ];
		buttons = [
			{
				label: 'Dashboard',
				color: 'primary',
				href: AdminRoutes.Users
			},
			{
				label: t('buttons.logout'),
				className: ' bg-gray-50 hover:bg-gray-100 hover:text-red-700 text-gray-900',
				onClick: logout
			},
		]

    }}

		return (
			<NavBar navItems={items} buttons={buttons} isOpen={isOpen} toggleHamburger={toggleHamburger}>



			</NavBar>
  )
}

export default Header