import { createSlice } from '@reduxjs/toolkit';
import { getAllMeetings, createMeeting, getMeetingById, deleteMeeting } from '../thunks';

const initialState = {
	meetings: [],
	isLoading: false,
	error: null,
};

const meetingsSlice = createSlice({
	name: 'meetings',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(createMeeting.pending, state => {
				state.isLoading = true;
			})
			.addCase(createMeeting.fulfilled, (state, action) => {
				state.isLoading = false;
				state.meetings.push(action.payload);
			})
			.addCase(createMeeting.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getAllMeetings.pending, state => {
				state.isLoading = true;
			})
			.addCase(getAllMeetings.fulfilled, (state, action) => {
				state.isLoading = false;
				state.meetings = action.payload;
			})
			.addCase(getAllMeetings.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getMeetingById.pending, state => {
				state.isLoading = true;
			})
			.addCase(getMeetingById.fulfilled, (state, action) => {
				state.isLoading = false;
				const index = state.meetings.findIndex(meeting => meeting._id === action.payload._id);
				if (index !== -1) {
					state.meetings[index] = action.payload;
				} else {
					state.meetings.push(action.payload);
				}
			})
			.addCase(getMeetingById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(deleteMeeting.pending, state => {
				state.isLoading = true;
			})
			.addCase(deleteMeeting.fulfilled, (state, action) => {
				state.isLoading = false;
				state.meetings = state.meetings.filter(meeting => meeting._id !== action.payload);
			})
			.addCase(deleteMeeting.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export default meetingsSlice.reducer;
