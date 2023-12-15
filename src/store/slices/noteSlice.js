import { createSlice } from '@reduxjs/toolkit';
import {
	createNote,
	getAllNotes,
	getNoteById,
	deleteNote,
	updateNote,
	getUniqueTags,
} from '../thunks';

const initialState = {
	notes: [],
	note: null,
	uniqueTags: [],
	isLoading: false,
	error: null,
	currentPage: 1,
	totalPages: 0,
	totalNotes: 0,
};

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		clearNote: state => {
			state.note = null;
		},
	},
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
				state.notes = action.payload.notes;
				state.currentPage = parseInt(action.payload.currentPage);
				state.totalPages = parseInt(action.payload.pages);
				state.totalNotes = parseInt(action.payload.total);
			})

			.addCase(getAllNotes.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getUniqueTags.pending, state => {
				state.isLoading = true;
			})
			.addCase(getUniqueTags.fulfilled, (state, action) => {
				state.isLoading = false;
				state.uniqueTags = action.payload;
			})
			.addCase(getUniqueTags.rejected, (state, action) => {
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
export const { clearNote } = notesSlice.actions;
export const notesActions = notesSlice.actions;

export default notesSlice.reducer;
