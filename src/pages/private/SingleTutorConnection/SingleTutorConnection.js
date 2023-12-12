import PropTypes from 'prop-types';
import BasicProfileCard from '../../../components/features/User/BasicProfileCard';
import {
	ConnectionCard,
	ParticipantContainer,
	ConnectionInfo,
	StudentInfo,
	TutorInfo,
	ConversationContainer,
	ArrowIcon,
} from './SingleTutorConnection.styled';
import Button from '../../../components/ui/Button';
import { ButtonContainer } from '../../../components/ui/Containers';
import { deleteMeeting } from '../../../store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Modal from '../../../components/ui/Modal/Modal';
import { useConversations, useModal } from '../../../hooks';
import { calculateDaysOfConnection, groupConversationsByDate } from '../../../utils';
import { ConversationForm } from '../../../components';
import ConversationMessage from '../../../components/features/ConversationMessage/ConversationMessage';
import Loader from '../../../components/ui/Loader/Loader';

const SingleTutorConnection = ({ meeting, onDiscuss }) => {
	const {
		isConversationFormOpen,
		handleToggleConversationForm,
		handleConversationSubmit,
		handleConversationCancel,
		handleDeleteConversation,
		conversations,
		isConversationsLoading,
	} = useConversations(meeting._id);
	const { isOpen, openModal, closeModal } = useModal();
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.meetings.isLoading);
	const userAuth = useSelector(state => state.user.userAuth);
	const [visibleConversations, setVisibleConversations] = useState({});
	const daysOfConnection = calculateDaysOfConnection(meeting.date);
	const toggleVisibility = date => {
		setVisibleConversations(prev => ({ ...prev, [date]: !prev[date] }));
	};

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
		return <Loader />;
	}

	const groupedConversations = groupConversationsByDate(conversations);

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
						<Button $secondary onClick={handleToggleConversationForm}>
							Conversations
						</Button>
					</ButtonContainer>
					{isConversationFormOpen && (
						<>
							<ConversationForm
								onSubmit={handleConversationSubmit}
								onCancel={handleConversationCancel}
							/>
							{isConversationsLoading ? (
								<Loader />
							) : (
								Object.entries(groupedConversations).map(([date, conversationsForDate]) => (
									<ConversationContainer key={date}>
										<button onClick={() => toggleVisibility(date)}>
											<p>Conversations from: {date} </p>
											<ArrowIcon
												size={'1.2rem'}
												className={visibleConversations[date] ? 'rotated' : ''}
											/>
										</button>
										{visibleConversations[date] &&
											conversationsForDate.map(conversation => (
												<ConversationMessage
													key={conversation._id}
													message={conversation}
													isTutor={conversation.user._id === meeting.tutor._id}
													onDelete={() => handleDeleteConversation(conversation._id)}
													userAuth={userAuth}
												/>
											))}
									</ConversationContainer>
								))
							)}
						</>
					)}
				</ConnectionInfo>
			</ConnectionCard>
			<Modal
				isOpen={isOpen}
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
			_id: PropTypes.string.isRequired,
		}),
		student: PropTypes.shape({
			name: PropTypes.string.isRequired,
			avatar: PropTypes.string.isRequired,
			_id: PropTypes.string.isRequired,
		}),
		date: PropTypes.string.isRequired,
	}),
	onDiscuss: PropTypes.func,
	onDelete: PropTypes.func,
};

export default SingleTutorConnection;
