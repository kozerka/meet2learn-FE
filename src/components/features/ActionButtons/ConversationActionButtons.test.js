import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ConversationActionButtons from './ConversationActionButtons';

describe('ConversationActionButtons', () => {
	test('calls onDelete when the delete button is clicked', () => {
		const handleDelete = jest.fn();
		const handleToggleConversation = jest.fn();

		render(
			<ConversationActionButtons
				onDelete={handleDelete}
				onToggleConversation={handleToggleConversation}
			/>
		);

		const deleteButton = screen.getByText('Delete Connection');
		userEvent.click(deleteButton);

		expect(handleDelete).toHaveBeenCalled();
	});

	test('calls onToggleConversation when the conversations button is clicked', () => {
		const handleDelete = jest.fn();
		const handleToggleConversation = jest.fn();

		render(
			<ConversationActionButtons
				onDelete={handleDelete}
				onToggleConversation={handleToggleConversation}
			/>
		);

		const conversationButton = screen.getByText('Conversations');
		userEvent.click(conversationButton);

		expect(handleToggleConversation).toHaveBeenCalled();
	});

	test('renders both buttons', () => {
		const handleDelete = jest.fn();
		const handleToggleConversation = jest.fn();

		render(
			<ConversationActionButtons
				onDelete={handleDelete}
				onToggleConversation={handleToggleConversation}
			/>
		);

		expect(screen.getByText('Delete Connection')).toBeInTheDocument();
		expect(screen.getByText('Conversations')).toBeInTheDocument();
	});

	test('does not call onDelete when conversations button is clicked', () => {
		const handleDelete = jest.fn();
		const handleToggleConversation = jest.fn();

		render(
			<ConversationActionButtons
				onDelete={handleDelete}
				onToggleConversation={handleToggleConversation}
			/>
		);

		const conversationButton = screen.getByText('Conversations');
		userEvent.click(conversationButton);

		expect(handleDelete).not.toHaveBeenCalled();
	});

	test('does not call onToggleConversation when delete button is clicked', () => {
		const handleDelete = jest.fn();
		const handleToggleConversation = jest.fn();

		render(
			<ConversationActionButtons
				onDelete={handleDelete}
				onToggleConversation={handleToggleConversation}
			/>
		);

		const deleteButton = screen.getByText('Delete Connection');
		userEvent.click(deleteButton);

		expect(handleToggleConversation).not.toHaveBeenCalled();
	});
});
