import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';

export const createNote = createAsyncThunk(
	'notes/createNote',
	async (noteData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/notes/create`, noteData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getAllNotes = createAsyncThunk(
	'notes/getAllNotes',
	async ({ page = 1, limit = 6, tag }, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${BASE_URL}/api/notes?page=${page}&limit=${limit}${tag ? '&tag=' + tag : ''}`
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getUniqueTags = createAsyncThunk(
	'notes/getUniqueTags',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/notes/tags`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getNoteById = createAsyncThunk(
	'notes/getNoteById',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/api/notes/${id}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const deleteNote = createAsyncThunk('notes/deleteNote', async (id, { rejectWithValue }) => {
	try {
		const response = await axios.delete(`${BASE_URL}/api/notes/${id}`);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const updateNote = createAsyncThunk(
	'notes/updateNote',
	async ({ id, updateData }, { rejectWithValue }) => {
		try {
			const response = await axios.patch(`${BASE_URL}/api/notes/edit/${id}`, updateData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
