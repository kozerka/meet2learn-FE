import styled from 'styled-components';
import { TbArrowBigDownFilled } from 'react-icons/tb';

const ArrowIcon = styled(TbArrowBigDownFilled)`
	transition: transform 0.3s ease;

	&.rotated {
		transform: rotate(180deg);
	}
`;

const ConversationContainer = styled.div`
	button {
		width: 100%;
		border: none;
		border-radius: 6px;
		padding: 0.5rem;
		margin: 1rem 0;
		background-color: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.textInverted};
		font-weight: 700;
		text-transform: uppercase;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
`;

export { ArrowIcon, ConversationContainer };
