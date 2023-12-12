import { createSlice } from '@reduxjs/toolkit';
import { fetchUserStats } from '../thunks';

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
