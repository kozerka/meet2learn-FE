import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getConversationsForMeeting,
	deleteConversation,
	createConversation,
} from '../store/thunks';

export const useConversations = (meetingId, meetings) => {
	const dispatch = useDispatch();
	const [isConversationFormOpen, setIsConversationFormOpen] = useState(false);
	const [conversationText, setConversationText] = useState('');
	const allConversations = useSelector(state => state.conversations.conversations);
	const conversations = useMemo(() => {
		return allConversations[meetingId] || [];
	}, [allConversations, meetingId]);

	const isConversationsLoading = useSelector(state => state.conversations.isLoading);

	useEffect(() => {
		if (meetings.length > 0 && meetings.some(meeting => meeting._id === meetingId)) {
			dispatch(getConversationsForMeeting(meetingId));
		}
	}, [dispatch, meetingId, meetings]);

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
