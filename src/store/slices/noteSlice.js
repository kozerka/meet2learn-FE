import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import BASE_URL from '../../utils/baseUrl';

const initialState = {
	notes: [],
	note: null,
	isLoading: false,
	error: null,
};

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

export const getAllNotes = createAsyncThunk('notes/getAllNotes', async (_, { rejectWithValue }) => {
	try {
		const response = await axios.get(`${BASE_URL}/api/notes`);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

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

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(createNote.pending, state => {
				state.isLoading = true;
			})
			.addCase(createNote.fulfilled, (state, action) => {
				state.isLoading = false;
				state.notes.push(action.payload);
			})
			.addCase(createNote.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getAllNotes.pending, state => {
				state.isLoading = true;
			})
			.addCase(getAllNotes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.notes = action.payload;
			})
			.addCase(getAllNotes.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getNoteById.pending, state => {
				state.isLoading = true;
			})
			.addCase(getNoteById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.note = action.payload;
			})
			.addCase(getNoteById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(deleteNote.pending, state => {
				state.isLoading = true;
			})
			.addCase(deleteNote.fulfilled, (state, action) => {
				state.isLoading = false;
				state.notes = state.notes.filter(note => note._id !== action.meta.arg);
			})
			.addCase(deleteNote.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateNote.pending, state => {
				state.isLoading = true;
			})
			.addCase(updateNote.fulfilled, (state, action) => {
				state.isLoading = false;
				state.notes = state.notes.map(note =>
					note._id === action.payload._id ? action.payload : note
				);
			})
			.addCase(updateNote.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});
export const notesActions = notesSlice.actions;
export default notesSlice.reducer;
