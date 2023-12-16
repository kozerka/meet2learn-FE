import commentReducer from './commentSlice';

describe('commentSlice Reducer', () => {
	const initialState = {
		comments: [],
		isLoading: false,
		error: null,
	};

	test('should return the initial state', () => {
		expect(commentReducer(undefined, {})).toEqual(initialState);
	});

	test('should handle a pending action', () => {
		const action = { type: 'comment/createComment/pending' };
		const expectedState = { ...initialState, isLoading: true };
		expect(commentReducer(initialState, action)).toEqual(expectedState);
	});
	test('should handle a fulfilled action for creating a comment', () => {
		const newComment = { id: 1, text: 'Test comment' };
		const updatedComments = [...initialState.comments, newComment];
		const action = { type: 'comment/createComment/fulfilled', payload: updatedComments };
		const expectedState = {
			...initialState,
			comments: updatedComments,
			isLoading: false,
		};

		expect(commentReducer(initialState, action)).toEqual(expectedState);
	});

	test('should handle a rejected action for creating a comment', () => {
		const error = 'Error';
		const action = { type: 'comment/createComment/rejected', payload: error };
		const expectedState = { ...initialState, error, isLoading: false };
		expect(commentReducer(initialState, action)).toEqual(expectedState);
	});
	test('should handle deleteComment.pending action', () => {
		const action = { type: 'comment/deleteComment/pending' };
		const expectedState = { ...initialState, isLoading: true };
		expect(commentReducer(initialState, action)).toEqual(expectedState);
	});

	test('should handle deleteComment.fulfilled action', () => {
		const initialStateWithComments = {
			...initialState,
			comments: [
				{ id: 1, text: 'Test comment' },
				{ id: 2, text: 'Another comment' },
			],
		};
		const newCommentsAfterDeletion = [{ id: 2, text: 'Another comment' }];
		const action = { type: 'comment/deleteComment/fulfilled', payload: newCommentsAfterDeletion };
		const expectedState = {
			...initialState,
			comments: newCommentsAfterDeletion,
			isLoading: false,
		};
		expect(commentReducer(initialStateWithComments, action)).toEqual(expectedState);
	});

	test('should handle deleteComment.rejected action', () => {
		const error = 'Error deleting comment';
		const action = { type: 'comment/deleteComment/rejected', payload: error };
		const expectedState = { ...initialState, error, isLoading: false };
		expect(commentReducer(initialState, action)).toEqual(expectedState);
	});
});
