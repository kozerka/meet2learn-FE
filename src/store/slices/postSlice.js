import { createSlice } from '@reduxjs/toolkit';
import {
	createPost,
	getPosts,
	getPostById,
	deletePost,
	updatePost,
	likePost,
	dislikePost,
	givePriority,
	getPostsByUserId,
} from '../thunks';

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
