import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import contactFormReducer from './slices/contactFormSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		contactForm: contactFormReducer,
	},
});
