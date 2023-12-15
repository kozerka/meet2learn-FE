import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../utils/baseUrl';

export const sendContactForm = createAsyncThunk(
	'contactForm/sendContactForm',
	async (formData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/contact`, formData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
