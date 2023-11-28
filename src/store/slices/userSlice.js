import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../utils/baseUrl';
import { clearUserInfo } from './authSlice';

export const loginUser = createAsyncThunk('users/login', async (userData, { rejectWithValue }) => {
	try {
		const response = await axios.post(`${BASE_URL}/api/users/login`, userData);
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
			dispatch(clearUserInfo());
			localStorage.removeItem('userInfo');
			return true;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState: {
		userData: null,
		isLoading: false,
		error: null,
	},
	reducers: {
		clearUserInfo: state => {
			state.userData = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loginUser.pending, state => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log(action.payload);
				state.userData = action.payload;
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
			});
	},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
