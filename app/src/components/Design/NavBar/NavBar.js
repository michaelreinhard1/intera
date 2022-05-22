import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from  '../../../assets/icons/Logo.svg';
import Button from "../Button/Button";
import { HomeRoutes } from "../../../core/routing";
import { t } from "i18next";

const NavBar = ({ navItems = [],buttons=[], toggleHamburger, isOpen, children }) => {
    return (
        <>
    <nav className="Nav z-50 fixed w-full px-4 py-4 flex justify-center items-center bg-white shadow-sm">
        <div className="Nav__Container w-1140px  px-4 py-4 flex flex-row-reverse lg:flex-row lg:justify-between md:justify-end sm:justify-end items-center bg-white">
            <NavLink className='Nav__Logo text-3xl font-bold leading-none justify-self-center m-auto lg:m-0' to={HomeRoutes.Index}>
                <img src={Logo} alt="Logo" />
            </NavLink>
        <div className="lg:hidden justify-self-end">
            <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleHamburger}>
                <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>{t('navigation.mobile menu')}</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            {navItems.map((navItem, index) => (
            <>

            <li key={navItem.label}>
                <NavLink
                key={index}
                className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500')}
                to={navItem.href}>{navItem.label}
                </NavLink>
            </li>
            {/* Add the next for all items exept the last one */}
            {navItems.indexOf(navItem) !== navItems.length - 1 &&
            <li className="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </li>
            }
            </>
        ))}
      </ul>


    <div>
       {buttons.map((button, index) => (
            <Button
            key={index}
            color={button.color}
            className={`hidden mx-3 ${button.className}`}
            href={button.href}
            onClick={button.onClick}
            >
                {button.label}
            </Button>
        ))}
    </div>

</div>
    </nav>
  <div className={`navbar-menu relative z-50 ${isOpen ? '' : 'hidden'}`} >
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<NavLink
				onClick={toggleHamburger}
				className="mr-auto text-3xl font-bold leading-none" to="/">
					<img className='Hamburger__Logo' src={Logo} alt="Logo" />
				</NavLink>
				<Button className="navbar-close" onClick={toggleHamburger}>
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</Button>
			</div>
			<div>
				<ul>
                {navItems.map((navItem, index) => (
                    <>
                    <li key={navItem.label} className="mb-1" >
                        <NavLink
                        key={index}
                        onClick={toggleHamburger}
						className={({ isActive }) => (isActive ? 'block p-4  font-semibold  bg-blue-50 text-blue-500 rounded' : 'block p-4  font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded')}
						to={navItem.href}>{navItem.label}</NavLink>
                    </li>
                    {/* <li className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                    </li> */}
                    </>
                ))}
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6" onClick={toggleHamburger}>
                    {buttons.map((button, index) => (
                        <Button
                        key={index}
                        color={button.color}
                        className={`block w-full px-4 py-3 mb-2 leading-loose text-xs text-center font-semibold rounded-xl ${button.className}`}
                        href={button.href}
                        onClick={button.onClick}
                        >
                            {button.label}
                        </Button>
                    ))}

				</div>
				<p className="my-4 text-xs text-center text-gray-400">
					<span>Copyright © {new Date().getFullYear()}</span>
				</p>
			</div>
		</nav>
	</div>

  </>

    );
};

NavBar.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            label: PropTypes.string,
        })
    ).isRequired,
};

export default NavBar;