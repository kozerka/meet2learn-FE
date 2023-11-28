import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import contactFormReducer from './slices/contactFormSlice';
import notesReducer from './slices/noteSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		contactForm: contactFormReducer,
		auth: authReducer,
		user: userReducer,
		notes: notesReducer,
	},
	devTools: true,
});
