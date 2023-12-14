import PropTypes from 'prop-types';
import {
	ConnectionCard,
	ParticipantContainer,
	ConnectionInfo,
} from './SingleTutorConnection.styled';
import { Modal, Loader } from '../../../components/ui';
import { useSelector } from 'react-redux';
import { useTutorConnection } from '../../../hooks';
import { calculateDaysOfConnection } from '../../../utils';
import { ConversationForm } from '../../../components/features/Forms';
import {
	ConversationSection,
	ParticipantInfo,
	ConversationActionButtons,
} from '../../../components/features';

const SingleTutorConnection = ({ meeting }) => {
	const meetings = useSelector(state => state.meetings.meetings);
	const isLoading = useSelector(state => state.meetings.isLoading);
	const userAuth = useSelector(state => state.user.userAuth);
	const {
		isOpen,
		openModal,
		closeModal,
		visibleConversations,
		toggleVisibility,
		isConversationFormOpen,
		handleToggleConversationForm,
		handleConversationSubmit,
		handleConversationCancel,
		handleDeleteConversation,
		isConversationsLoading,
		groupedConversations,
		handleConfirmDelete,
	} = useTutorConnection(meeting._id, meetings);

	if (isLoading) {
		return <Loader />;
	}
	const daysOfConnection = calculateDaysOfConnection(meeting.date);

	return (
		<>
			<ConnectionCard>
				<ParticipantContainer>
					<ParticipantInfo user={meeting.student} role={'student'} />
					<ParticipantInfo user={meeting.tutor} role={'tutor'} />
				</ParticipantContainer>

				<ConnectionInfo>
					<p>Connected on: {new Date(meeting.date).toLocaleDateString()}</p>
					<p>Cooperating for: {daysOfConnection} day(s)</p>
					<ConversationActionButtons
						onDelete={openModal}
						onToggleConversation={handleToggleConversationForm}
					/>
					{isConversationFormOpen && (
						<>
							<ConversationForm
								onSubmit={handleConversationSubmit}
								onCancel={handleConversationCancel}
							/>
							{isConversationsLoading ? (
								<Loader />
							) : (
								<ConversationSection
									groupedConversations={groupedConversations}
									visibleConversations={visibleConversations}
									toggleVisibility={toggleVisibility}
									handleDeleteConversation={handleDeleteConversation}
									userAuth={userAuth}
									meeting={meeting}
								/>
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
	onDelete: PropTypes.func,
};

export default SingleTutorConnection;
