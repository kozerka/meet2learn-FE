import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../store/slices/themeSlice';
import {
	Nav,
	NavbarContainer,
	NavMenu,
	NavItem,
	MobileIcon,
	ThemeToggler,
	StyledLink,
	NavBtn,
} from './Navbar.styled';
import { NavigationLink } from './NavigationLink.styled';
import Button from '../../ui/Button';
import MobileNavbar from './MobileNavbar';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../ui/Logo/Logo';

const Navbar = () => {
	const dispatch = useDispatch();
	const currentTheme = useSelector(state => state.theme.theme);
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const handleToggleTheme = () => dispatch(toggleTheme());
	const toggleMobileNav = () => setIsMobileNavOpen(prevState => !prevState);

	return (
		<Nav>
			<NavbarContainer>
				<Logo isLink={true} linkTo={'/'} />
				<NavMenu>
					<NavItem>
						<NavigationLink to={'/'} className={({ isActive }) => (isActive ? 'active' : '')}>
							Home
						</NavigationLink>
					</NavItem>
					<NavItem>
						<NavigationLink to={'/tutors'} className={({ isActive }) => (isActive ? 'active' : '')}>
							Tutors
						</NavigationLink>
					</NavItem>
					<NavItem>
						<NavigationLink
							to={'/contact'}
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							Contact
						</NavigationLink>
					</NavItem>
				</NavMenu>
				<NavBtn>
					<StyledLink to={'/login'}>
						<Button $primary={true}>Login </Button>
					</StyledLink>

					<ThemeToggler onClick={handleToggleTheme}>
						{currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
					</ThemeToggler>
				</NavBtn>
				<MobileIcon onClick={toggleMobileNav}>
					{isMobileNavOpen ? <FaTimes /> : <FaBars />}
				</MobileIcon>
			</NavbarContainer>
			<MobileNavbar
				$isOpen={isMobileNavOpen}
				toggleNav={toggleMobileNav}
				isMobileNavOpen={isMobileNavOpen}
				currentTheme={currentTheme}
				handleToggleTheme={handleToggleTheme}
			/>
		</Nav>
	);
};

export default Navbar;
