import PropTypes from 'prop-types';
import { ButtonContainer, Button } from '../../ui';

const ConversationActionButtons = ({ onDelete, onToggleConversation }) => (
	<ButtonContainer>
		<Button $secondary onClick={onDelete}>
			Delete Connection
		</Button>
		<Button $secondary onClick={onToggleConversation}>
			Conversations
		</Button>
	</ButtonContainer>
);

ConversationActionButtons.propTypes = {
	onDelete: PropTypes.func.isRequired,
	onToggleConversation: PropTypes.func.isRequired,
};

export default ConversationActionButtons;
