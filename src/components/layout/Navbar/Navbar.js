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
	ImageContainer,
	Dropdown,
} from './Navbar.styled';
import { NavigationLink } from './NavigationLink.styled';
import Button from '../../ui/Button';
import MobileNavbar from './MobileNavbar';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../ui/Logo/Logo';
import { navLinks } from '../../../data';
import { logoutUser } from '../../../store/slices/userSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useUserData from '../../../hooks/useUserData';

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentTheme = useSelector(state => state.theme.theme);
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const handleToggleTheme = () => dispatch(toggleTheme());
	const toggleMobileNav = () => setIsMobileNavOpen(prevState => !prevState);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const toggleDropdown = () => setIsDropdownOpen(prevState => !prevState);
	const userAuth = useSelector(state => state.user.userAuth);
	const handleLogout = () => {
		dispatch(logoutUser());
		toast.success('Successfully logged out');
		navigate('/login');
	};

	const { userData, isLoading } = useUserData();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<Nav>
			<NavbarContainer>
				<Logo isLink={true} linkTo={'/'} />
				<NavMenu>
					{navLinks.map((link, index) => (
						<NavItem key={index}>
							<NavigationLink to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
								{link.text}
							</NavigationLink>
						</NavItem>
					))}
				</NavMenu>
				<NavBtn key={userData ? 'user-logged-in' : 'no-user'}>
					{userAuth?.userInfo && userData ? (
						<div style={{ position: 'relative' }}>
							<ImageContainer>
								<img src={userData?.avatar} alt={'Avatar użytkownika'} onClick={toggleDropdown} />
							</ImageContainer>
							{isDropdownOpen && (
								<Dropdown>
									<StyledLink to={'/dashboard'}>Dashboard</StyledLink>
									<StyledLink to={'/login'} onClick={handleLogout}>
										Logout
									</StyledLink>
								</Dropdown>
							)}
						</div>
					) : (
						<StyledLink to={'/login'}>
							<Button $primary={true}>Login</Button>
						</StyledLink>
					)}
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
