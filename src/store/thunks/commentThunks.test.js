import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createComment, deleteComment } from './commentThunks';

jest.mock('axios', () => {
	const axiosMock = {
		create: jest.fn().mockReturnThis(),
		defaults: { withCredentials: true },
		interceptors: {
			response: {
				use: jest.fn(),
			},
		},
		post: jest.fn(),
		delete: jest.fn(),
	};

	return axiosMock;
});

const mockStore = configureStore([thunk]);

describe('comment thunks', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			comments: [],
			isLoading: false,
			error: null,
		});
	});

	test('creates success when creating a comment is successful', async () => {
		const commentData = { postId: 1, text: 'Test comment' };
		const response = { data: commentData };
		axios.post.mockResolvedValue(response);
		await store.dispatch(createComment({ postId: 1, commentData }));
		const actions = store.getActions();
		expect(actions[0].type).toBe('comment/createComment/pending');
		expect(actions[1].type).toBe('comment/createComment/fulfilled');
		expect(actions[1].payload).toEqual(commentData);
	});

	test('creates success when deleting a comment is successful', async () => {
		const commentIdToDelete = 1;
		axios.delete.mockResolvedValue();
		await store.dispatch(deleteComment({ postId: 1, commentId: commentIdToDelete }));
		const actions = store.getActions();
		expect(actions[0].type).toBe('comment/deleteComment/pending');
		expect(actions[1].type).toBe('comment/deleteComment/fulfilled');
		expect(actions[1].payload).toEqual(commentIdToDelete);
	});

	test('handles failure when creating a comment fails', async () => {
		const errorMessage = 'Failed to create comment';
		axios.post.mockRejectedValue({
			response: { data: errorMessage, status: 400 },
		});

		await store.dispatch(createComment({ postId: 1, text: 'Test comment' }));

		const actions = store.getActions();
		expect(actions[0].type).toBe('comment/createComment/pending');
		expect(actions[1].type).toBe('comment/createComment/rejected');
		expect(actions[1].error).toBeTruthy();
	});

	test('handles failure when deleting a comment fails', async () => {
		const errorMessage = 'Failed to delete comment';
		axios.delete.mockRejectedValue({
			response: { data: errorMessage, status: 400 },
		});

		await store.dispatch(deleteComment({ postId: 1, commentId: 1 }));

		const actions = store.getActions();
		expect(actions[0].type).toBe('comment/deleteComment/pending');
		expect(actions[1].type).toBe('comment/deleteComment/rejected');
		expect(actions[1].error).toBeTruthy();
	});
});
