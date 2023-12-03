import PropTypes from 'prop-types';
import styled from 'styled-components';
import BasicProfileCard from '../../../components/features/User/BasicProfileCard';

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

const Button = styled.button`
	padding: 5px 10px;
	margin: 5px;
	cursor: pointer;
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

const calculateDaysOfConnection = connectionDate => {
	const today = new Date();
	const startDate = new Date(connectionDate);
	const timeDiff = today - startDate;
	const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
	return daysDiff;
};

const SingleTutorConnection = ({ meeting, onDiscuss, onDelete }) => {
	const daysOfConnection = calculateDaysOfConnection(meeting.date);
	return (
		<ConnectionCard>
			<ParticipantContainer>
				<StudentInfo>
					<BasicProfileCard user={meeting.student} />
					<span>Student: {meeting.student.name}</span>
				</StudentInfo>
				<TutorInfo>
					<BasicProfileCard user={meeting.tutor} />
					<span>Tutor: {meeting.tutor.name}</span>
				</TutorInfo>
			</ParticipantContainer>

			<ConnectionInfo>
				<p>Connected on: {new Date(meeting.date).toLocaleDateString()}</p>
				<p>Cooperating for: {daysOfConnection} day(s)</p>
				<Button onClick={() => onDelete(meeting._id)}>Delete Connection</Button>
				<Button onClick={() => onDiscuss(meeting._id)}>Discuss</Button>
			</ConnectionInfo>
		</ConnectionCard>
	);
};

SingleTutorConnection.propTypes = {
	meeting: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		tutor: PropTypes.shape({
			name: PropTypes.string.isRequired,
			avatar: PropTypes.string.isRequired,
			// Inne właściwości tutora
		}),
		student: PropTypes.shape({
			name: PropTypes.string.isRequired,
			avatar: PropTypes.string.isRequired,
			// Inne właściwości studenta
		}),
		date: PropTypes.string.isRequired,
		// Inne właściwości spotkania
	}).isRequired,
	onDiscuss: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default SingleTutorConnection;
