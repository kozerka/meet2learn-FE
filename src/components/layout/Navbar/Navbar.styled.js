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
	z-index: 99999999999;
	transition: 0.8s all ease;
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

const NavMenu = styled.ul`
	display: none;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -2rem;
	@media screen and (min-width: 772px) {
		display: flex;
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
	display: none;
	align-items: center;
	margin-right: 1.5rem;
	line-height: 1rem;
	@media screen and (min-width: 772px) {
		display: flex;
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
	opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
	top: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
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

const Dropdown = styled.div`
	background: ${({ theme }) => theme.body};
	position: absolute;
	top: 80px;
	right: -20px;
	padding: 1rem;
	border-radius: 5px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.8rem;
	a:hover {
		color: ${({ theme }) => theme.primary};
	}
`;
const ImageContainer = styled.div`
	position: relative;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		cursor: pointer;
		object-fit: cover;
		object-position: center;
	}
`;

export {
	Dropdown,
	ImageContainer,
	Nav,
	NavbarContainer,
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
