import styled, { css } from 'styled-components';
import { BiSolidDownArrow } from 'react-icons/bi';

const AccordionSection = styled.div`
	max-width: 48rem;
	margin: 3rem auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;
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
	font-size: 1.2rem;
`;

const HiddenBox = styled.div`
	grid-column: 2;
	display: none;
`;

const Paragraph = styled.p`
	font-size: 0.9rem;
	line-height: 1.3;
	margin-bottom: 1rem;
`;
const rotateIcon = css`
	transform: rotate(180deg);
`;

const Icon = styled(BiSolidDownArrow)`
	color: ${({ theme }) => theme.primary};
	transition: transform 0.3s ease;
	font-size: 1.3rem;
	margin-right: 1rem;
	${props => props.isOpen && rotateIcon}
`;

export { AccordionSection, Item, Number, Text, HiddenBox, Paragraph, Icon };
