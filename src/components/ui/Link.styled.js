import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	font-weight: bold;
	color: ${({ theme }) => theme.primary};
`;

export const NavLinkStyled = styled(Link)`
	padding: 0.9rem;
	border-radius: 6px;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: ${({ theme }) => theme.text};

	&:hover {
		background-color: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.textInverted};
	}
`;
