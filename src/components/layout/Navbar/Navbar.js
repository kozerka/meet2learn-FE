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
import { Button, Logo } from '../../ui';
import MobileNavbar from './MobileNavbar';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../../../data';
import { logoutUser } from '../../../store/thunks';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUserData, useDropdown, useMobileNav } from '../../../hooks';

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentTheme = useSelector(state => state.theme.theme);

	const handleToggleTheme = () => dispatch(toggleTheme());

	const { isDropdownOpen, toggleDropdown, closeDropdown } = useDropdown();
	const { isMobileNavOpen, toggleMobileNav } = useMobileNav();

	const userAuth = useSelector(state => state.user.userAuth);
	const handleLogout = () => {
		dispatch(logoutUser());
		toast.success('Successfully logged out');
		navigate('/login');
	};

	const { userData } = useUserData();

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
									<StyledLink to={'/dashboard'} onClick={closeDropdown}>
										Dashboard
									</StyledLink>
									<StyledLink
										to={'/login'}
										onClick={() => {
											handleLogout();
											closeDropdown();
										}}
									>
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
				userAuth={userAuth}
				handleLogout={handleLogout}
			/>
		</Nav>
	);
};

export default Navbar;
