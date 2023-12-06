import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';

export const createComment = createAsyncThunk(
	'comment/createComment',
	async ({ postId, commentData }, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/posts/comments/${postId}`, commentData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const deleteComment = createAsyncThunk(
	'comment/deleteComment',
	async ({ postId, commentId }, { rejectWithValue }) => {
		try {
			await axios.delete(`${BASE_URL}/api/posts/comments/${postId}/${commentId}`);
			return commentId;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

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
