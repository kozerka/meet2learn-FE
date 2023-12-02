import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';

export const getAllTutors = createAsyncThunk(
	'tutors/fetchTutors',
	async ({ page, limit, firstName, lastName, subject }, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/tutors`, {
				params: { page, limit, firstName, lastName, subject },
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getTutorById = createAsyncThunk(
	'tutors/fetchTutorById',
	async (tutorId, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/tutors/${tutorId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const initialState = {
	tutors: [],
	tutor: null,
	status: 'idle',
	tutorStatus: 'idle',
	error: null,
	total: 0,
	totalPages: 0,
	currentPage: 1,
};

export const tutorSlice = createSlice({
	name: 'tutors',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getAllTutors.pending, state => {
				state.status = 'loading';
			})
			.addCase(getAllTutors.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.tutors = action.payload.tutors;
				state.total = action.payload.total;
				state.totalPages = action.payload.totalPages;
				state.currentPage = action.payload.currentPage;
			})
			.addCase(getAllTutors.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase(getTutorById.pending, state => {
				state.tutorStatus = 'loading';
			})
			.addCase(getTutorById.fulfilled, (state, action) => {
				state.tutorStatus = 'succeeded';
				state.tutor = action.payload;
			})
			.addCase(getTutorById.rejected, (state, action) => {
				state.tutorStatus = 'failed';
				state.error = action.payload;
			});
	},
});

export default tutorSlice.reducer;
