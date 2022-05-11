import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Button from '../../Design/Button/Button';
// import { useAuthContext } from '../AuthContainer';
import './Header.scss'
import Logo from  '../../../assets/icons/Logo.svg';
import { useAuthContext } from "../Auth/AuthProvider";

const Header = () => {

	const { logout } = useAuthContext();

	const { auth } = useAuthContext();
	const location = useLocation();

	//   set auth to true

	const [isOpen, setIsOpen] = React.useState(false);

	const openHamburger = () => {
			setIsOpen(!isOpen);
	}

      return (
        <>
	<nav className="Nav z-50 fixed w-full px-4 py-4 flex justify-center items-center bg-white">
  <div className="Nav__Container w-1440px  px-4 py-4 flex lg:justify-between md:justify-center sm:justify-center items-center bg-white">
		<NavLink className='Nav__Logo text-3xl font-bold leading-none' to={'/'}>
			<img src={Logo} alt="" />
		</NavLink>
		<div className="lg:hidden">
			<button className="navbar-burger flex items-center text-blue-600 p-3" onClick={openHamburger}>
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><NavLink 
      className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500')}
      to="/buy">Buy</NavLink></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><NavLink  
      className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500')}
      to="/rent">Rent</NavLink></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><NavLink  className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500')} to="/sell">Sell</NavLink></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><NavLink  className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500')} to="/saved-homes">Saved homes</NavLink></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><NavLink  className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500')} to="/contact">Contact</NavLink></li>
		</ul>

		{/* If no auth show Login and Register button else show Log out */}
		{!auth ? (
			<>
			<div>

				<Button className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100  text-gray-900 font-bold  rounded-xl transition duration-200" href={'/account/login'}>
				Login
				</Button>
				<Button className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600  text-white font-bold rounded-xl transition duration-200" href={'/account/register'}>
				Register
				</Button>
			</div>
			</>
		) : (
			<>
			<div>
				
				<Button href={'/profile'} className="hidden lg:inline-block lg:mr-3 py-2 px-6 bg-blue-500 hover:bg-blue-600  text-white font-bold rounded-xl transition duration-200">
				My account
				</Button>
				<Button className="hidden lg:inline-block lg:ml-auto  py-2 px-6 bg-gray-50 hover:bg-gray-100 hover:text-red-700 text-gray-900 font-bold  rounded-xl transition duration-200" onClick={logout}>
				Logout
				</Button>
			</div>
			</>

	)}

  </div>
	</nav>
	<div className={`navbar-menu relative z-50 ${isOpen ? '' : 'hidden'}`} >
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<NavLink
				onClick={openHamburger}
				className="mr-auto text-3xl font-bold leading-none" to="/">
					<img className='Hamburger__Logo' src={Logo} alt="Logo" />
				</NavLink>
				<button className="navbar-close" onClick={openHamburger}>
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li className="mb-1">
						<NavLink onClick={openHamburger}
						className={({ isActive }) => (isActive ? 'block p-4  font-semibold text-gray-400 bg-blue-50 text-blue-500 rounded' : 'block p-4  font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded')}
						to="/buy">Buy</NavLink>
					</li>
					<li className="mb-1">
						<NavLink onClick={openHamburger}
						className={({ isActive }) => (isActive ? 'block p-4  font-semibold text-gray-400 bg-blue-50 text-blue-500 rounded' : 'block p-4  font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded')}
						to="/rent">Rent</NavLink>
					</li>
					<li className="mb-1">
						<NavLink onClick={openHamburger}
						className={({ isActive }) => (isActive ? 'block p-4  font-semibold text-gray-400 bg-blue-50 text-blue-500 rounded' : 'block p-4  font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded')}
						to="/sell">Sell</NavLink>
					</li>
					<li className="mb-1">
						<NavLink onClick={openHamburger}
						className={({ isActive }) => (isActive ? 'block p-4  font-semibold text-gray-400 bg-blue-50 text-blue-500 rounded' : 'block p-4  font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded')}
						to="/saved-homes">Saved homes</NavLink>
					</li>
					<li className="mb-1">
						<NavLink onClick={openHamburger}
						className={({ isActive }) => (isActive ? 'block p-4  font-semibold text-gray-400 bg-blue-50 text-blue-500 rounded' : 'block p-4  font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded')}
						to="/contact">Contact</NavLink>
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
					<NavLink
					onClick={openHamburger}
					className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" to="/account/login">Login</NavLink>
					<NavLink
					onClick={openHamburger}
					className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" to="/account/register">Register</NavLink>
				</div>
				<p className="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2022</span>
				</p>
			</div>
		</nav>
	</div>
        </>
  )
}

export default Header