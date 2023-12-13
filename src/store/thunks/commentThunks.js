import axios from '../../utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
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
