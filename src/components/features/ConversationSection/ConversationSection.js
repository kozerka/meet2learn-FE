import PropTypes from 'prop-types';
import { ConversationContainer, ArrowIcon } from './ConversationSection.styled';
import { ConversationMessage } from '../';

const ConversationSection = ({
	groupedConversations,
	visibleConversations,
	toggleVisibility,
	handleDeleteConversation,
	userAuth,
	meeting,
}) => {
	return (
		<>
			{Object.entries(groupedConversations).map(([date, conversationsForDate]) => (
				<ConversationContainer key={date}>
					<button onClick={() => toggleVisibility(date)}>
						<p>Conversations from: {date} </p>
						<ArrowIcon size={'1.2rem'} className={visibleConversations[date] ? 'rotated' : ''} />
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
			))}
		</>
	);
};

ConversationSection.propTypes = {
	groupedConversations: PropTypes.object.isRequired,
	visibleConversations: PropTypes.object.isRequired,
	toggleVisibility: PropTypes.func.isRequired,
	handleDeleteConversation: PropTypes.func.isRequired,
	userAuth: PropTypes.object.isRequired,
	meeting: PropTypes.shape({
		tutor: PropTypes.shape({
			_id: PropTypes.string.isRequired,
		}),
	}).isRequired,
};

export default ConversationSection;
