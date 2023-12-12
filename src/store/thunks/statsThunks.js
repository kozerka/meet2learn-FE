import { createAsyncThunk } from '@reduxjs/toolkit';
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
