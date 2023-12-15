import { groupConversationsByDate } from './groupConversationsByDate';

describe('groupConversationsByDate', () => {
	test('groups conversations by date correctly', () => {
		const conversations = [
			{ date: '2023-11-01' },
			{ date: '2023-11-01' },
			{ date: '2023-11-02' },
			{ date: '2023-11-03' },
		];

		const groupedConversations = groupConversationsByDate(conversations);

		expect(Object.keys(groupedConversations)).toHaveLength(3);
		expect(groupedConversations['11/1/2023']).toHaveLength(2);
		expect(groupedConversations['11/2/2023']).toHaveLength(1);
		expect(groupedConversations['11/3/2023']).toHaveLength(1);
	});

	test('handles empty conversations array', () => {
		const conversations = [];
		const groupedConversations = groupConversationsByDate(conversations);
		expect(Object.keys(groupedConversations)).toHaveLength(0);
	});
});
