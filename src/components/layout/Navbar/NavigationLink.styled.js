import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationLink = styled(NavLink)`
	color: ${({ theme }) => theme.text};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: ${({ theme }) => theme.primary};
		border-bottom: 4px solid ${({ theme }) => theme.primaryButton};
		font-weight: 700;
	}
`;
const NavigationLinkMobile = styled(NavLink)`
	color: ${({ theme }) => theme.text};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 1rem 2rem 0;
	line-height: 2rem;
	font-size: 1.3rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: ${({ theme }) => theme.primary};
		font-weight: 700;
	}
`;

export { NavigationLink, NavigationLinkMobile };
