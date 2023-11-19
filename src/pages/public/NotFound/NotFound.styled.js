import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledNotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	max-width: 56rem;
	margin: 0 auto;
`;

const StyledImage = styled.img`
	max-width: 100%;
	max-height: 34rem;
`;

const StyledHeading = styled.h3`
	font-size: 2rem;
	margin-top: 1rem;
`;

const StyledParagraph = styled.p`
	font-size: 1.2rem;
`;
const StyledLink = styled(Link)`
	font-size: 1.125rem;
	font-weight: 600;
	text-decoration: none;
	display: inline-block;
	color: inherit;
`;
const ErrorNumber = styled.p`
	font-size: 5rem;
	color: ${({ theme }) => theme.primary};
	font-weight: bold;
	margin: 0.5rem 0;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding: 1rem;
`;

export {
	StyledNotFoundContainer,
	StyledImage,
	StyledHeading,
	StyledParagraph,
	StyledLink,
	ErrorNumber,
	Wrapper,
};
