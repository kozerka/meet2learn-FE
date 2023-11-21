import { SidebarContainer, MobileIcon, ThemeToggler, StyledLink, NavLogo } from './Navbar.styled';
import { NavigationLinkMobile } from './NavigationLink.styled';
import { FaTimes, FaBars, FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from '../../ui/Button';

const MobileNavbar = ({ $isOpen, toggleNav, isMobileNavOpen, currentTheme, handleToggleTheme }) => {
	return (
		<SidebarContainer $isOpen={$isOpen}>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
				<MobileIcon onClick={toggleNav}>{isMobileNavOpen ? <FaTimes /> : <FaBars />}</MobileIcon>
				<NavLogo to={'/'} onClick={toggleNav}>
					meet<span>2</span>learn
				</NavLogo>
				<NavigationLinkMobile
					to={'/'}
					onClick={toggleNav}
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					Home
				</NavigationLinkMobile>
				<NavigationLinkMobile
					to={'/tutors'}
					onClick={toggleNav}
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					Tutors
				</NavigationLinkMobile>
				<NavigationLinkMobile
					to={'/contact'}
					onClick={toggleNav}
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					Contact
				</NavigationLinkMobile>
				<div>
					{' '}
					<StyledLink to={'/login'}>
						{' '}
						<Button $primary={true} onClick={toggleNav}>
							Login
						</Button>
					</StyledLink>
					<ThemeToggler
						onClick={() => {
							handleToggleTheme();
						}}
					>
						{currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
					</ThemeToggler>
				</div>
			</div>
		</SidebarContainer>
	);
};

MobileNavbar.propTypes = {
	$isOpen: PropTypes.bool.isRequired,
	toggleNav: PropTypes.func.isRequired,
	isMobileNavOpen: PropTypes.bool.isRequired,
	currentTheme: PropTypes.string.isRequired,
	handleToggleTheme: PropTypes.func.isRequired,
};

export default MobileNavbar;
