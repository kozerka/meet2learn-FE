import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const initialState = {
	posts: [],
	currentPost: null,
	categories: [],
	isLoading: false,
	userPosts: [],
	error: null,
};

export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setCategories: (state, action) => {
			state.categories = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(createPost.pending, state => {
				state.isLoading = true;
			})
			.addCase(createPost.fulfilled, (state, action) => {
				state.isLoading = false;
				state.posts.unshift(action.payload);
			})
			.addCase(createPost.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getPosts.pending, state => {
				state.isLoading = true;
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.posts = action.payload;
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getPostById.pending, state => {
				state.isLoading = true;
			})
			.addCase(getPostById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.currentPost = action.payload;
			})
			.addCase(getPostById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getPostsByUserId.pending, state => {
				state.isLoading = true;
			})
			.addCase(getPostsByUserId.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userPosts = action.payload;
			})
			.addCase(getPostsByUserId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(deletePost.pending, state => {
				state.isLoading = true;
			})
			.addCase(deletePost.fulfilled, (state, action) => {
				state.isLoading = false;
				state.posts = state.posts.filter(post => post._id !== action.payload);
			})
			.addCase(deletePost.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updatePost.pending, state => {
				state.isLoading = true;
			})
			.addCase(updatePost.fulfilled, (state, action) => {
				state.isLoading = false;
				const index = state.posts.findIndex(post => post._id === action.payload._id);
				if (index !== -1) {
					state.posts[index] = action.payload;
				}
			})
			.addCase(updatePost.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(likePost.pending, state => {
				state.isLoading = true;
			});
		builder
			.addCase(likePost.fulfilled, (state, action) => {
				state.post = action.payload;
				state.isLoading = false;
			})
			.addCase(likePost.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(dislikePost.pending, state => {
				state.isLoading = true;
			})
			.addCase(dislikePost.fulfilled, (state, action) => {
				state.post = action.payload;
				state.isLoading = false;
			})
			.addCase(dislikePost.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(givePriority.pending, state => {
				state.isLoading = true;
			})
			.addCase(givePriority.fulfilled, (state, action) => {
				state.post = action.payload;
				state.isLoading = false;
			})

			.addCase(givePriority.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});
export const { setCategories } = postSlice.actions;
export default postSlice.reducer;
