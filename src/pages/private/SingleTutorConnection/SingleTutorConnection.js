import PropTypes from 'prop-types';
import BasicProfileCard from '../../../components/features/User/BasicProfileCard';
import {
	ConnectionCard,
	ParticipantContainer,
	ConnectionInfo,
	StudentInfo,
	TutorInfo,
} from './SingleTutorConnection.styled';
import Button from '../../../components/ui/Button';
import { ButtonContainer } from '../../../components/ui/Containers';
import { deleteMeeting } from '../../../store/slices/meetingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Modal from '../../../components/ui/Modal/Modal';

const calculateDaysOfConnection = connectionDate => {
	const today = new Date();
	const startDate = new Date(connectionDate);
	const timeDiff = today - startDate;
	const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
	return daysDiff;
};

const SingleTutorConnection = ({ meeting, onDiscuss }) => {
	const dispatch = useDispatch();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const isLoading = useSelector(state => state.meetings.isLoading);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const daysOfConnection = calculateDaysOfConnection(meeting.date);
	const handleConfirmDelete = () => {
		dispatch(deleteMeeting(meeting._id))
			.unwrap()
			.then(() => {
				toast.success('Tutoring connection deleted successfully!');
				closeModal();
			})
			.catch(error => {
				toast.error(`Error: ${error.message}`);
			});
	};
	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
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
					<ButtonContainer>
						<Button $secondary onClick={openModal}>
							Delete Connection
						</Button>
						<Button $secondary onClick={() => onDiscuss(meeting._id)}>
							Discuss
						</Button>
					</ButtonContainer>
				</ConnectionInfo>
			</ConnectionCard>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				onConfirm={handleConfirmDelete}
				message={'Are you sure you want to delete this connection?'}
			/>
		</>
	);
};

SingleTutorConnection.propTypes = {
	meeting: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		tutor: PropTypes.shape({
			name: PropTypes.string.isRequired,
			avatar: PropTypes.string.isRequired,
		}),
		student: PropTypes.shape({
			name: PropTypes.string.isRequired,
			avatar: PropTypes.string.isRequired,
		}),
		date: PropTypes.string.isRequired,
	}).isRequired,
	onDiscuss: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default SingleTutorConnection;
