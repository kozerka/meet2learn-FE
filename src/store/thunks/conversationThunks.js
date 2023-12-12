import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';

export const createConversation = createAsyncThunk(
	'conversations/create',
	async ({ meetingId, text }, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/conversations/${meetingId}`, { text });
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getConversationsForMeeting = createAsyncThunk(
	'conversations/getForMeeting',
	async (meetingId, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/conversations/${meetingId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getAllConversations = createAsyncThunk(
	'conversations/getAll',
	async (_, { getState, rejectWithValue }) => {
		try {
			const userId = getState().user.userAuth._id;
			const response = await axios.get(`${BASE_URL}/api/conversations`, { params: { userId } });
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const deleteConversation = createAsyncThunk(
	'conversations/delete',
	async ({ meetingId, conversationId }, { rejectWithValue }) => {
		try {
			await axios.delete(`${BASE_URL}/api/conversations/${meetingId}/${conversationId}`);
			return { meetingId, conversationId };
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
