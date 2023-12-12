import { createAsyncThunk } from '@reduxjs/toolkit';
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
