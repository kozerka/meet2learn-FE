import { NavLink as Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
const slideIn = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 55%; 
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    width: 55%; 
    opacity: 1;
  }
  to {
    width: 0;
    opacity: 0;
  }
`;
const SidebarStyled = styled.div`
	transition: all 0.3s ease-in-out;
	height: 100%;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 998;
		background-color: ${({ theme }) => theme.background};
		padding-right: 1rem;
		height: 82vh;
		border-bottom-right-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		border-top-left-radius: 0.5rem;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
		animation: ${({ expanded }) => (expanded ? slideIn : slideOut)} 0.5s ease-out forwards;
	}
`;
const ToggleIcon = styled.div`
	position: fixed;
	right: 2rem;
	top: 8rem;
	z-index: 1001;
	display: block;
	cursor: pointer;
	svg {
		fill: ${({ theme }) => theme.primary};
	}

	@media screen and (min-width: 769px) {
		display: none;
	}
`;

const Nav = styled.nav`
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const DashboardMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	padding-bottom: 2rem;
`;
const NavLink = styled(Link)`
	height: 2.5rem;
	margin-left: 2rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	color: inherit;
	text-decoration: none;
	position: relative;
	transition: all 0.5s ease;
	border-radius: 0.5rem;
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.primary};
		font-size: 700;
	}

	&.active {
		background-color: ${({ theme }) => theme.secondary};
		color: white;
		margin-left: 0;
	}
	&.active::before {
		content: '';
		position: absolute;
		width: 6px;
		height: 100%;
		background-color: ${({ theme }) => theme.primary};

		top: 0;
		left: 0;
	}
	@media screen and (max-width: 992px) {
		margin-left: 1rem;
		span {
			display: none;
		}
	}
	@media screen and (max-width: 768px) {
		margin-left: 2rem;
		span {
			display: block;
		}
	}
`;
export { SidebarStyled, ToggleIcon, Nav, NavLink, DashboardMenu };
