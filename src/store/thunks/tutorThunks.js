import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';

export const getAllTutors = createAsyncThunk(
	'tutors/getAllTutors',
	async ({ page, limit, search }, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/tutors`, {
				params: { page, limit, search },
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getTutorById = createAsyncThunk(
	'tutors/getTutorById',
	async (tutorId, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/tutors/${tutorId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
