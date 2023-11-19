import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section``;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
	margin: auto;

	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		padding-top: 6rem;
		padding-bottom: 6rem;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
	margin-top: 2rem;
	height: 18rem;
	@media (min-width: 1024px) {
		margin-top: 0;
		height: 24rem;
	}
	@media (min-width: 1280px) {
		height: 28rem;
	}
`;

const Image = styled.img`
	object-fit: contain;
	height: 18rem;
	@media (min-width: 772px) {
		height: 22rem;
	}
	@media (min-width: 992px) {
		height: 24rem;
	}
	@media (min-width: 1280px) {
		height: 28rem;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
	text-align: center;
	border-radius: 0.125rem;
	max-width: 32rem;
	@media (min-width: 1024px) {
		margin: 0 auto;
		align-items: flex-start;
		max-width: 43rem;
		text-align: left;
	}
`;

const Heading = styled.h1`
	font-size: 3rem;
	font-weight: bold;
	line-height: 1.2;
	@media (min-width: 640px) {
		font-size: 3.75rem;
	}
`;

const Span = styled.span`
	color: ${({ theme }) => theme.primary};
	margin-right: 1rem;
`;

const Paragraph = styled.p`
	margin-bottom: 2rem;
	font-size: 1.125rem;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media (min-width: 640px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	@media (min-width: 1024px) {
		justify-content: flex-start;
	}
`;

const StyledLink = styled(Link)`
	font-size: 1.125rem;
	font-weight: 600;
	text-decoration: none;
	display: inline-block;
	color: inherit;
`;
export {
	Container,
	ImageContainer,
	Image,
	Content,
	Heading,
	Span,
	Paragraph,
	ButtonContainer,
	StyledLink,
	Section,
};
