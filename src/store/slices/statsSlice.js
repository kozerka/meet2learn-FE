import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';

export const fetchUserStats = createAsyncThunk(
	'stats/fetchUserStats',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/stats`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
const initialState = {
	stats: null,
	isLoading: false,
	error: null,
};

const statsSlice = createSlice({
	name: 'stats',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchUserStats.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchUserStats.fulfilled, (state, action) => {
				state.isLoading = false;
				state.stats = action.payload;
			})
			.addCase(fetchUserStats.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export default statsSlice.reducer;
