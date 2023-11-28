import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import contactFormReducer from './slices/contactFormSlice';
import notesReducer from './slices/noteSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		contactForm: contactFormReducer,
		notes: notesReducer,
	},
});
