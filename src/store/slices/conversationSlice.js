import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

// TODO to sobie potem wykorzystam do statystyk
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

const initialState = {
	conversations: [],
	isLoading: false,
	error: null,
};
const conversationSlice = createSlice({
	name: 'conversations',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(createConversation.pending, state => {
				state.isLoading = true;
			})
			.addCase(createConversation.fulfilled, (state, action) => {
				state.isLoading = false;
				state.conversations.push(action.payload);
			})
			.addCase(createConversation.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getConversationsForMeeting.pending, state => {
				state.isLoading = true;
			})
			.addCase(getConversationsForMeeting.fulfilled, (state, action) => {
				state.isLoading = false;
				state.conversations[action.meta.arg] = action.payload;
			})
			.addCase(getConversationsForMeeting.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getAllConversations.pending, state => {
				state.isLoading = true;
			})
			.addCase(getAllConversations.fulfilled, (state, action) => {
				state.isLoading = false;
				state.conversations = action.payload;
			})
			.addCase(getAllConversations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(deleteConversation.pending, state => {
				state.isLoading = true;
			})
			.addCase(deleteConversation.fulfilled, (state, action) => {
				state.isLoading = false;
				state.conversations = state.conversations.filter(
					c => c._id !== action.meta.arg.conversationId
				);
			})
			.addCase(deleteConversation.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export default conversationSlice.reducer;
