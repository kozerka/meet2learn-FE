import PropTypes from 'prop-types';
import { SidebarContainer, MobileIcon, ThemeToggler, StyledLink } from './Navbar.styled';
import { NavigationLinkMobile } from './NavigationLink.styled';
import { FaTimes, FaBars, FaSun, FaMoon } from 'react-icons/fa';
import Button from '../../ui/Button';
import Logo from '../../ui/Logo/Logo';
import { TextCenterContainer } from '../../ui/Containers';
import { navLinks } from '../../../data';

const MobileNavbar = ({
	$isOpen,
	toggleNav,
	isMobileNavOpen,
	currentTheme,
	handleToggleTheme,
	userAuth,
	handleLogout,
}) => {
	return (
		<SidebarContainer $isOpen={$isOpen}>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
				<MobileIcon onClick={toggleNav}>{isMobileNavOpen ? <FaTimes /> : <FaBars />}</MobileIcon>
				<Logo isLink={true} linkTo={'/'} />
				{navLinks.map((link, index) => (
					<NavigationLinkMobile
						key={index}
						to={link.to}
						onClick={toggleNav}
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						{link.text}
					</NavigationLinkMobile>
				))}
				<div>
					{userAuth?.userInfo ? (
						<TextCenterContainer>
							<ThemeToggler onClick={handleToggleTheme}>
								{currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
							</ThemeToggler>
							<StyledLink to={'/dashboard'} onClick={toggleNav}>
								<Button $primary={true}>Dashboard</Button>
							</StyledLink>
							<StyledLink
								to={'/login'}
								onClick={() => {
									handleLogout();
									toggleNav();
								}}
							>
								<Button $primary={true}>Logout</Button>
							</StyledLink>
						</TextCenterContainer>
					) : (
						<>
							<StyledLink to={'/login'} onClick={toggleNav}>
								<Button $primary={true}>Login</Button>
							</StyledLink>
							<ThemeToggler onClick={handleToggleTheme}>
								{currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
							</ThemeToggler>
						</>
					)}
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
	userAuth: PropTypes.object,
	handleLogout: PropTypes.func,
};

export default MobileNavbar;
