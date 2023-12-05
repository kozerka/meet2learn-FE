import styled from 'styled-components';
import { TbArrowBigDownFilled } from 'react-icons/tb';

const ConnectionCard = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	width: 100%;
	margin: 2rem auto;
	padding: 1rem 2rem;
	border-radius: 1rem;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	background-color: ${({ theme }) => theme.background};
`;

const StudentInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const TutorInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ConnectionInfo = styled.div`
	flex-grow: 1;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.5rem;
	margin: 1rem;
`;

const ArrowIcon = styled(TbArrowBigDownFilled)`
	transition: transform 0.3s ease;

	&.rotated {
		transform: rotate(180deg);
	}
`;

const ConversationContainer = styled.div`
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.11);
	border-radius: 8px;
	padding: 1.5rem;
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

const ParticipantContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	gap: 1rem;
	align-items: center;

	@media (max-width: 880px) {
		flex-direction: column;
	}
`;
export {
	ConnectionCard,
	StudentInfo,
	TutorInfo,
	ConnectionInfo,
	ParticipantContainer,
	ArrowIcon,
	ConversationContainer,
};
