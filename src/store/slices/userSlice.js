import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loginUser.pending, state => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log(action.payload);
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
			});
	},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
