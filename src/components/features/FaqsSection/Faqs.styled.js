import styled, { css } from 'styled-components';
import { BiSolidDownArrow } from 'react-icons/bi';

const AccordionSection = styled.div`
	max-width: 100%;
	padding: 1rem 2rem;
	margin: 1rem auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: 768px) {
		max-width: 48rem;
		padding: 0;
	}
`;

const Item = styled.div`
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.06);
	padding: 1rem;
	display: grid;
	grid-template-columns: auto 1fr auto;
	column-gap: 1rem;
	background-color: ${({ theme }) => theme.background};
	align-items: center;
	border-radius: 0.5rem;

	&.open {
		border-bottom: 0.5rem solid ${({ theme }) => theme.secondary};
		border-top: 0.5rem solid ${({ theme }) => theme.secondary};

		.hiddenBox {
			display: block;
		}
	}
`;

const Number = styled.p`
	font-size: 1.5rem;
	font-weight: 500;
	color: #ced4da;
`;

const Text = styled.p`
	font-size: 1rem;
	@media (min-width: 992px) {
		font-size: 1.2rem;
	}
`;

const HiddenBox = styled.div`
	grid-column: 2;
	display: none;
`;

const Paragraph = styled.p`
	font-size: 0.9rem;
	line-height: 1.3;
	margin-bottom: 1rem;
	padding: 1rem 0.5rem;
	@media (min-width: 992px) {
		font-size: 1.1rem;
		padding: 2rem 1rem;
	}
`;
const rotateIcon = css`
	transform: rotate(180deg);
`;

const Icon = styled(BiSolidDownArrow)`
	color: ${({ theme }) => theme.primary};
	transition: transform 0.3s ease;
	font-size: 1.3rem;
	margin-right: 1rem;
	${props => props.$isOpen && rotateIcon}
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 6rem 2rem;
	gap: 2rem;
	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 4rem;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
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
`;

export {
	AccordionSection,
	Item,
	Number,
	Text,
	HiddenBox,
	Paragraph,
	Icon,
	ImageContainer,
	Image,
	Container,
};
