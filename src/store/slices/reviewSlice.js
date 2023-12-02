import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';

export const addReview = createAsyncThunk(
	'reviews/addReview',
	async ({ tutorId, reviewData }, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/reviews/add/${tutorId}`, reviewData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getTutorReviews = createAsyncThunk(
	'reviews/getTutorReviews',
	async (tutorId, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/reviews/tutor/${tutorId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getMyReviews = createAsyncThunk(
	'reviews/getMyReviews',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/reviews/my`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const updateReview = createAsyncThunk(
	'reviews/updateReview',
	async ({ reviewId, reviewData }, { rejectWithValue }) => {
		try {
			const response = await axios.patch(`${BASE_URL}/api/reviews/update/${reviewId}`, reviewData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const deleteReview = createAsyncThunk(
	'reviews/deleteReview',
	async (reviewId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${BASE_URL}/api/reviews/delete/${reviewId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const reviewsSlice = createSlice({
	name: 'reviews',
	initialState: {
		reviews: [],
		review: null,
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(addReview.pending, state => {
				state.status = 'loading';
			})
			.addCase(addReview.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.reviews.push(action.payload);
			})
			.addCase(addReview.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase(getTutorReviews.pending, state => {
				state.status = 'loading';
			})
			.addCase(getTutorReviews.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.reviews = action.payload;
			})
			.addCase(getTutorReviews.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase(getMyReviews.pending, state => {
				state.status = 'loading';
			})
			.addCase(getMyReviews.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.reviews = action.payload;
			})
			.addCase(getMyReviews.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase(updateReview.pending, state => {
				state.status = 'loading';
			})
			.addCase(updateReview.fulfilled, (state, action) => {
				state.status = 'succeeded';
				const index = state.reviews.findIndex(review => review._id === action.payload._id);
				if (index !== -1) {
					state.reviews[index] = action.payload;
				}
			})
			.addCase(updateReview.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase(deleteReview.pending, state => {
				state.status = 'loading';
			})
			.addCase(deleteReview.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.reviews = state.reviews.filter(review => review._id !== action.payload._id);
			})
			.addCase(deleteReview.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});

export default reviewsSlice.reducer;
