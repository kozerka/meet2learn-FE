import { createSlice } from '@reduxjs/toolkit';
import { createComment, deleteComment } from '../thunks';

export const commentSlice = createSlice({
	name: 'comment',
	initialState: {
		comments: [],
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(createComment.pending, state => {
				state.isLoading = true;
			})
			.addCase(createComment.fulfilled, (state, action) => {
				state.isLoading = false;
				state.comments = action.payload;
			})
			.addCase(createComment.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(deleteComment.pending, state => {
				state.isLoading = true;
			})
			.addCase(deleteComment.fulfilled, (state, action) => {
				state.isLoading = false;
				state.comments = action.payload;
			})
			.addCase(deleteComment.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export default commentSlice.reducer;
