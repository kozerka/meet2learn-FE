import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
	background-color: ${({ theme }) => theme.body};
	height: 5rem;
	margin-top: -5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	position: sticky;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	top: 0;
	z-index: 100;
	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;
const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 5rem;
	z-index: 1;
	width: 100%;
	padding: 0 2rem;
	max-width: 75rem;
`;
const NavLogo = styled(Link)`
	color: ${({ theme }) => theme.text};
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 1.5rem;
	font-weight: bold;
	text-decoration: none;
	span {
		color: ${({ theme }) => theme.primary};
		font-size: 2.5rem;
	}
`;
const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -2rem;
	@media screen and (max-width: 772px) {
		display: none;
	}
`;
const NavItem = styled.li`
	height: 5rem;
`;
const MobileIcon = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 50%);
	font-size: 2rem;
	z-index: 9999999999;
	transition: transform 0.3s ease;
	cursor: pointer;
	@media screen and (min-width: 772px) {
		display: none;
	}
`;

const NavBtn = styled.div`
	display: flex;
	align-items: center;
	margin-right: 1.5rem;
	line-height: 1rem;
	@media screen and (max-width: 772px) {
		display: none;
	}
`;

const StyledLink = styled(Link)`
	font-size: 1.125rem;
	font-weight: 600;
	text-decoration: none;
	display: inline-block;
	color: inherit;
`;
const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 9999;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.body};
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	@media screen and (min-width: 772px) {
		display: none;
	}
`;

const ThemeToggler = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	font-size: 1.3rem;
	margin-left: 0.5rem;
	color: ${({ theme }) => theme.primary};
`;

export {
	Nav,
	NavbarContainer,
	NavLogo,
	NavMenu,
	NavItem,
	MobileIcon,
	NavBtn,
	StyledLink,
	SidebarContainer,
	ThemeToggler,
	FaSun,
	FaMoon,
	FaBars,
	FaTimes,
};
