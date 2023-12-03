import styled from 'styled-components';
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

const ParticipantContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	gap: 1rem;
	align-items: center;

	@media (max-width: 880px) {
		flex-direction: column;
	}
`;
export { ConnectionCard, StudentInfo, TutorInfo, ConnectionInfo, ParticipantContainer };
