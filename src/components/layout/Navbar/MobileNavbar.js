import { SidebarContainer, MobileIcon, ThemeToggler, StyledLink } from './Navbar.styled';
import { NavigationLinkMobile } from './NavigationLink.styled';
import { FaTimes, FaBars, FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from '../../ui/Button';
import Logo from '../../ui/Logo/Logo';
import { navLinks } from '../../../data';

const MobileNavbar = ({ $isOpen, toggleNav, isMobileNavOpen, currentTheme, handleToggleTheme }) => {
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
					<StyledLink to={'/login'}>
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
