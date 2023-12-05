export const groupConversationsByDate = conversations => {
	return conversations.reduce((acc, conversation) => {
		const date = new Date(conversation.date).toLocaleDateString();
		if (!acc[date]) {
			acc[date] = [];
		}
		acc[date].push(conversation);
		return acc;
	}, {});
};
