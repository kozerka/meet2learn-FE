import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getConversationsForMeeting,
	deleteConversation,
	createConversation,
} from '../store/thunks';

export const useConversations = meetingId => {
	const dispatch = useDispatch();
	const [isConversationFormOpen, setIsConversationFormOpen] = useState(false);
	const [conversationText, setConversationText] = useState('');
	const conversations = useSelector(state => state.conversations.conversations[meetingId] || []);
	const isConversationsLoading = useSelector(state => state.conversations.isLoading);

	useEffect(() => {
		dispatch(getConversationsForMeeting(meetingId));
	}, [dispatch, meetingId]);

	const handleToggleConversationForm = () => {
		setIsConversationFormOpen(!isConversationFormOpen);
		if (!isConversationFormOpen) {
			dispatch(getConversationsForMeeting(meetingId));
		}
	};

	const handleConversationSubmit = text => {
		if (text) {
			const conversationData = { meetingId, text };
			dispatch(createConversation(conversationData)).then(() => {
				dispatch(getConversationsForMeeting(meetingId));
			});
		}
	};

	const handleConversationCancel = () => {
		setIsConversationFormOpen(false);
		setConversationText('');
	};

	const handleDeleteConversation = conversationId => {
		dispatch(deleteConversation({ meetingId, conversationId })).then(() => {
			dispatch(getConversationsForMeeting(meetingId));
		});
	};

	return {
		isConversationFormOpen,
		handleToggleConversationForm,
		conversationText,
		setConversationText,
		handleConversationSubmit,
		handleConversationCancel,
		handleDeleteConversation,
		conversations,
		isConversationsLoading,
	};
};
