import { createAsyncThunk } from '@reduxjs/toolkit';
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
