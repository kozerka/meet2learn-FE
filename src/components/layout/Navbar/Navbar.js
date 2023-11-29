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
import { navLinks } from '../../../data';
import styled from 'styled-components';
import { logoutUser } from '../../../store/slices/userSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useUserData from '../../hooks/useUserData';

const Dropdown = styled.div`
	background: ${({ theme }) => theme.body};
	position: absolute;
	top: 50px;
	right: 0;
	padding: 1rem;
	border-radius: 5px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentTheme = useSelector(state => state.theme.theme);
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const handleToggleTheme = () => dispatch(toggleTheme());
	const toggleMobileNav = () => setIsMobileNavOpen(prevState => !prevState);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const toggleDropdown = () => setIsDropdownOpen(prevState => !prevState);
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
					{userData ? (
						<div style={{ position: 'relative' }}>
							<img
								src={userData?.avatar}
								alt={'Avatar użytkownika'}
								onClick={toggleDropdown}
								style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
							/>
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
