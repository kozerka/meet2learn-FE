import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';
import Message from './ConversationMessage.styled';
const ConversationMessage = ({ message, isTutor, onDelete, userAuth }) => {
	return (
		<Message $isTutor={isTutor}>
			<img src={message.avatar} alt={`${message.firstName} ${message.lastName}`} />
			<div className={'content'}>
				<div>
					<p>{message.text}</p>
					<p className={'hour'}>{new Date(message.date).toLocaleTimeString()}</p>
				</div>
				{userAuth.userInfo._id === message.user._id && (
					<FiTrash2 className={'trash-icon'} onClick={() => onDelete(message._id)} />
				)}
			</div>
		</Message>
	);
};
ConversationMessage.propTypes = {
	message: PropTypes.object.isRequired,
	isTutor: PropTypes.bool.isRequired,
	onDelete: PropTypes.func.isRequired,
	userAuth: PropTypes.object.isRequired,
};

export default ConversationMessage;
