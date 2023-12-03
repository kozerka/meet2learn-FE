import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';

export const createMeeting = createAsyncThunk(
	'meetings/createMeeting',
	async (meetingData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/meetings/create`, meetingData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getAllMeetings = createAsyncThunk(
	'meetings/getAllMeetings',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/meetings`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getMeetingById = createAsyncThunk(
	'meetings/getMeetingById',
	async (meetingId, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/meetings/${meetingId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const updateMeeting = createAsyncThunk(
	'meetings/updateMeeting',
	async ({ meetingId, updateData }, { rejectWithValue }) => {
		try {
			const response = await axios.put(`${BASE_URL}/api/meetings/update/${meetingId}`, updateData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const deleteMeeting = createAsyncThunk(
	'meetings/deleteMeeting',
	async (meetingId, { rejectWithValue }) => {
		try {
			await axios.delete(`${BASE_URL}/api/meetings/delete/${meetingId}`);
			return meetingId;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

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
			.addCase(updateMeeting.pending, state => {
				state.isLoading = true;
			})
			.addCase(updateMeeting.fulfilled, (state, action) => {
				state.isLoading = false;
				const index = state.meetings.findIndex(meeting => meeting._id === action.payload._id);
				if (index !== -1) {
					state.meetings[index] = action.payload;
				}
			})
			.addCase(updateMeeting.rejected, (state, action) => {
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
