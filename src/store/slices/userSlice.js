import { createSlice } from '@reduxjs/toolkit';
import {
	loginUser,
	registerUser,
	logoutUser,
	fetchUser,
	deleteUser,
	changePassword,
	updateUser,
	uploadAvatar,
	resetPasswordInitiate,
	resetPasswordFinalize,
} from '../thunks';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		userAuth: {
			error: null,
			userInfo: localStorage.getItem('userInfo')
				? JSON.parse(localStorage.getItem('userInfo'))
				: null,
		},
		userData: null,
		isLoading: false,
		error: null,
		resetPasswordStatus: '',
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loginUser.pending, state => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userAuth.userInfo = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(registerUser.pending, state => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userData = action.payload;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchUser.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userData = action.payload;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(logoutUser.fulfilled, state => {
				state.userAuth.userInfo = null;
				state.userData = null;
				localStorage.removeItem('userInfo');
			})
			.addCase(deleteUser.pending, state => {
				state.isLoading = true;
			})
			.addCase(deleteUser.fulfilled, state => {
				state.userAuth.userInfo = null;
				state.userData = null;
				state.isLoading = false;
			})
			.addCase(deleteUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(changePassword.pending, state => {
				state.isLoading = true;
			})
			.addCase(changePassword.fulfilled, state => {
				state.isLoading = false;
			})
			.addCase(changePassword.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateUser.pending, state => {
				state.isLoading = true;
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userData = action.payload;
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(uploadAvatar.pending, state => {
				state.isLoading = true;
			})
			.addCase(uploadAvatar.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userData.avatar = action.payload.avatar;
			})
			.addCase(uploadAvatar.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(resetPasswordInitiate.pending, state => {
				state.isLoading = true;
			})
			.addCase(resetPasswordInitiate.fulfilled, state => {
				state.isLoading = false;
				state.resetPasswordStatus = 'Email sent';
			})
			.addCase(resetPasswordInitiate.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload || 'Failed to send reset password email';
			})
			.addCase(resetPasswordFinalize.pending, state => {
				state.isLoading = true;
			})
			.addCase(resetPasswordFinalize.fulfilled, state => {
				state.isLoading = false;
				state.resetPasswordStatus = 'Password reset successful';
			})
			.addCase(resetPasswordFinalize.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload || 'Failed to reset password';
			});
	},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
