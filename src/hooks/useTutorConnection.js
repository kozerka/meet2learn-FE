import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteMeeting } from '../store/thunks';
import { useModal, useConversations } from './';
import { groupConversationsByDate } from '../utils';

export const useTutorConnection = (meetingId, meetings) => {
	const dispatch = useDispatch();
	const { isOpen, openModal, closeModal } = useModal();
	const [visibleConversations, setVisibleConversations] = useState({});
	const {
		isConversationFormOpen,
		handleToggleConversationForm,
		handleConversationSubmit,
		handleConversationCancel,
		handleDeleteConversation,
		conversations,
		isConversationsLoading,
	} = useConversations(meetingId, meetings);

	const toggleVisibility = date => {
		setVisibleConversations(prev => ({ ...prev, [date]: !prev[date] }));
	};

	const handleConfirmDelete = () => {
		dispatch(deleteMeeting(meetingId))
			.unwrap()
			.then(() => {
				toast.success('Tutoring connection deleted successfully!');
				closeModal();
			})
			.catch(error => {
				toast.error(`Error: ${error.message}`);
			});
	};

	const groupedConversations = groupConversationsByDate(conversations);

	return {
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
	};
};
