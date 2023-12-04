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
import { useState, useEffect } from 'react';
import Modal from '../../../components/ui/Modal/Modal';
import {
	createConversation,
	getConversationsForMeeting,
	deleteConversation,
} from '../../../store/slices/conversationSlice';
import styled from 'styled-components';
import { FiTrash2 } from 'react-icons/fi';

const Message = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: ${props => (props.$isTutor ? 'row-reverse' : 'row')};
	margin-bottom: 10px;

	.content {
		display: flex;

		padding: 5px 10px;
		border-radius: 10px;
		background-color: #f0f0f0;
		margin-left: ${props => (props.$isTutor ? '4rem' : '0')};
		margin-right: ${props => (props.$isTutor ? '0' : '4rem')};
		word-break: break-all;
		gap: 1rem;
		div {
			display: flex;
			gap: 1rem;
			.hour {
				font-size: 0.5rem;
			}
		}
	}

	img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin: 0.3rem;
	}
	.trash-icon {
		font-size: 1rem;
		display: none;
		cursor: pointer;
	}

	&:hover .trash-icon {
		display: inline-block;
		color: red;
	}
`;

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
	const [isConversationFormOpen, setIsConversationFormOpen] = useState(false);
	const [conversationText, setConversationText] = useState('');
	const { conversations, isLoading: isConversationsLoading } = useSelector(state => ({
		conversations: state.conversations.conversations[meeting._id] || [],
		isLoading: state.conversations.isLoading,
	}));
	const userAuth = useSelector(state => state.user.userAuth);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const [visibleConversations, setVisibleConversations] = useState({});
	const daysOfConnection = calculateDaysOfConnection(meeting.date);
	useEffect(() => {
		dispatch(getConversationsForMeeting(meeting._id));
	}, [dispatch, meeting._id, meeting.tutor._id, meeting.student._id]);

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
	const handleToggleConversationForm = () => {
		setIsConversationFormOpen(!isConversationFormOpen);
		if (!isConversationFormOpen) {
			dispatch(getConversationsForMeeting(meeting._id));
		}
	};

	const handleConversationSubmit = () => {
		if (conversationText) {
			const conversationData = { meetingId: meeting._id, text: conversationText };
			dispatch(createConversation(conversationData)).then(() => {
				dispatch(getConversationsForMeeting(meeting._id));
			});
			setConversationText('');
		}
	};

	const handleConversationCancel = () => {
		setIsConversationFormOpen(false);
		setConversationText('');
	};
	if (isLoading) {
		return <div>Loading...</div>;
	}
	const groupConversationsByDate = conversations => {
		return conversations.reduce((acc, conversation) => {
			const date = new Date(conversation.date).toLocaleDateString();
			if (!acc[date]) {
				acc[date] = [];
			}
			acc[date].push(conversation);
			return acc;
		}, {});
	};

	const groupedConversations = groupConversationsByDate(conversations);
	const handleDeleteConversation = conversationId => {
		const meetingId = meeting._id;
		dispatch(deleteConversation({ meetingId, conversationId }))
			.then(() => {
				toast.success('Conversation deleted successfully!');
				dispatch(getConversationsForMeeting(meeting._id));
			})
			.catch(error => {
				toast.error(error.message);
			});
	};

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
							<div>
								<textarea
									rows={'5'}
									value={conversationText}
									onChange={e => setConversationText(e.target.value)}
									placeholder={'Type your message here...'}
								/>
								<button onClick={handleConversationSubmit}>Submit</button>
								<button onClick={handleConversationCancel}>Cancel</button>
							</div>
							{isConversationsLoading ? (
								<p>Loading conversations...</p>
							) : (
								Object.entries(groupedConversations).map(([date, conversationsForDate]) => (
									<div style={{ border: '1px solid black' }} key={date}>
										<button onClick={() => toggleVisibility(date)}>
											Conversations from: {date} <span>🔽</span>
										</button>
										{visibleConversations[date] &&
											conversationsForDate.map(conversation => (
												<Message
													key={conversation._id}
													$isTutor={conversation.user._id === meeting.tutor._id}
												>
													<img
														src={conversation.avatar}
														alt={`${conversation.firstName} ${conversation.lastName}`}
													/>
													<div className={'content'}>
														<div>
															<p>{conversation.text}</p>
															<p className={'hour'}>
																{new Date(conversation.date).toLocaleTimeString()}
															</p>
														</div>
														{userAuth.userInfo._id === conversation.user._id && (
															<FiTrash2
																className={'trash-icon'}
																onClick={() => handleDeleteConversation(conversation._id)}
															/>
														)}
													</div>
												</Message>
											))}
									</div>
								))
							)}
						</>
					)}
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
