import { createSlice } from '@reduxjs/toolkit';
import {
	createConversation,
	getConversationsForMeeting,
	getAllConversations,
	deleteConversation,
} from '../thunks';
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
