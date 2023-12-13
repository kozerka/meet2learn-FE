import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';
export const createPost = createAsyncThunk(
	'post/createPost',
	async (postData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/posts/create`, postData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getPosts = createAsyncThunk('post/getPosts', async (_, { rejectWithValue }) => {
	try {
		const response = await axios.get(`${BASE_URL}/api/posts`);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const getPostById = createAsyncThunk(
	'post/getPostById',
	async (postId, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/posts/${postId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const deletePost = createAsyncThunk(
	'post/deletePost',
	async (postId, { rejectWithValue }) => {
		try {
			await axios.delete(`${BASE_URL}/api/posts/${postId}`);
			return postId;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const updatePost = createAsyncThunk(
	'post/updatePost',
	async ({ postId, updateData }, { rejectWithValue }) => {
		try {
			const response = await axios.put(`${BASE_URL}/api/posts/edit/${postId}`, updateData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const likePost = createAsyncThunk('post/likePost', async (postId, { rejectWithValue }) => {
	try {
		const response = await axios.put(`${BASE_URL}/api/posts/like/${postId}`);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});
export const dislikePost = createAsyncThunk(
	'post/dislikePost',
	async (postId, { rejectWithValue }) => {
		try {
			const response = await axios.put(`${BASE_URL}/api/posts/dislike/${postId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const givePriority = createAsyncThunk(
	'post/givePriority',
	async (postId, { rejectWithValue }) => {
		try {
			const response = await axios.put(`${BASE_URL}/api/posts/priority/${postId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const getPostsByUserId = createAsyncThunk(
	'post/getPostsByUserId',
	async (userId, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/posts/user/${userId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
