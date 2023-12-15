import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';

export const loginUser = createAsyncThunk('users/login', async (userData, { rejectWithValue }) => {
	try {
		const response = await axios.post(`${BASE_URL}/api/users/login`, userData);
		localStorage.setItem('userInfo', JSON.stringify(response.data));
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const registerUser = createAsyncThunk(
	'users/register',
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/users/register`, userData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const logoutUser = createAsyncThunk(
	'users/logout',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			await axios.get(`${BASE_URL}/api/users/logout`);
			localStorage.removeItem('userInfo');
			return true;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchUser = createAsyncThunk(
	'users/fetchUser',
	async (_, { getState, rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/users/me`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const updateUser = createAsyncThunk(
	'users/update',
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.patch(`${BASE_URL}/api/users/update`, userData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data || {});
		}
	}
);
export const uploadAvatar = createAsyncThunk(
	'users/uploadAvatar',
	async (formData, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};
			const response = await axios.put(`${BASE_URL}/api/users/upload-avatar`, formData, config);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data || {});
		}
	}
);

export const changePassword = createAsyncThunk(
	'users/changePassword',
	async (passwordData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/users/change-password`, passwordData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const deleteUser = createAsyncThunk('users/delete', async (_, { rejectWithValue }) => {
	try {
		await axios.delete(`${BASE_URL}/api/users/delete`);
		localStorage.removeItem('userInfo');
		return true;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});
export const resetPasswordInitiate = createAsyncThunk(
	'users/resetPasswordInitiate',
	async (email, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/users/reset-password-initiate`, { email });
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const resetPasswordFinalize = createAsyncThunk(
	'users/resetPasswordFinalize',
	async ({ token, newPassword }, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/users/reset-password-finalize`, {
				token,
				newPassword,
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
