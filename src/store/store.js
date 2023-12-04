import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import contactFormReducer from './slices/contactFormSlice';
import notesReducer from './slices/noteSlice';
import userReducer from './slices/userSlice';
import tutorReducer from './slices/tutorSlice';
import reviewReducer from './slices/reviewSlice';
import meetingReducer from './slices/meetingSlice';
import conversationReducer from './slices/conversationSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		contactForm: contactFormReducer,
		user: userReducer,
		notes: notesReducer,
		tutors: tutorReducer,
		reviews: reviewReducer,
		meetings: meetingReducer,
		conversations: conversationReducer,
	},
	devTools: true,
});
