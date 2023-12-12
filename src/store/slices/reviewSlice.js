import { createSlice } from '@reduxjs/toolkit';
import { addReview, getTutorReviews, getMyReviews, deleteReview, updateReview } from '../thunks';

const reviewsSlice = createSlice({
	name: 'reviews',
	initialState: {
		reviews: [],
		review: null,
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(addReview.pending, state => {
				state.isLoading = true;
			})
			.addCase(addReview.fulfilled, (state, action) => {
				state.isLoading = false;
				state.reviews.push(action.payload);
			})
			.addCase(addReview.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getTutorReviews.pending, state => {
				state.isLoading = true;
			})
			.addCase(getTutorReviews.fulfilled, (state, action) => {
				state.isLoading = false;
				state.reviews = action.payload;
			})
			.addCase(getTutorReviews.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getMyReviews.pending, state => {
				state.isLoading = true;
			})
			.addCase(getMyReviews.fulfilled, (state, action) => {
				state.isLoading = false;
				state.reviews = action.payload;
			})
			.addCase(getMyReviews.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateReview.pending, state => {
				state.isLoading = true;
			})
			.addCase(updateReview.fulfilled, (state, action) => {
				state.isLoading = false;
				const index = state.reviews.findIndex(review => review._id === action.payload._id);
				if (index !== -1) {
					state.reviews[index] = action.payload;
				}
			})
			.addCase(updateReview.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(deleteReview.pending, state => {
				state.isLoading = true;
			})
			.addCase(deleteReview.fulfilled, (state, action) => {
				state.isLoading = false;
				state.reviews = state.reviews.filter(review => review._id !== action.payload);
			})
			.addCase(deleteReview.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export default reviewsSlice.reducer;
