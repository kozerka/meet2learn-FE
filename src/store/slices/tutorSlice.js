import { createSlice } from '@reduxjs/toolkit';
import { getAllTutors, getTutorById } from '../thunks';

const initialState = {
	tutors: [],
	tutor: null,
	isLoading: false,
	isTutorLoading: false,
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
				state.isLoading = true;
			})
			.addCase(getAllTutors.fulfilled, (state, action) => {
				state.isLoading = false;
				state.tutors = action.payload.tutors;
				state.total = action.payload.total;
				state.totalPages = action.payload.totalPages;
				state.currentPage = action.payload.currentPage;
			})
			.addCase(getAllTutors.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getTutorById.pending, state => {
				state.isTutorLoading = true;
			})
			.addCase(getTutorById.fulfilled, (state, action) => {
				state.isTutorLoading = false;
				state.tutor = action.payload;
			})
			.addCase(getTutorById.rejected, (state, action) => {
				state.isTutorLoading = false;
				state.error = action.payload;
			});
	},
});

export default tutorSlice.reducer;
