import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	font-weight: bold;
	color: ${({ theme }) => theme.primary};
`;
