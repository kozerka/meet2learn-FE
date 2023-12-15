import { createSlice } from '@reduxjs/toolkit';
import { sendContactForm } from '../thunks';

export const contactFormSlice = createSlice({
	name: 'contactForm',
	initialState: {
		formData: {
			username: '',
			email: '',
			messageTitle: '',
			messageBody: '',
		},
		agreeTerms: false,
		status: 'idle',
		error: null,
	},
	reducers: {
		updateFormData: (state, action) => {
			state.formData = { ...state.formData, ...action.payload };
		},
		updateConsent: (state, action) => {
			state.agreeTerms = action.payload;
		},
		setStatus: (state, action) => {
			state.status = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		resetFormData: state => {
			state.formData = {
				username: '',
				email: '',
				messageTitle: '',
				messageBody: '',
			};
			state.agreeTerms = false;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(sendContactForm.pending, state => {
				state.status = 'loading';
			})
			.addCase(sendContactForm.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.error = null;
			})
			.addCase(sendContactForm.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});

export const { updateFormData, updateConsent, setStatus, setError, resetFormData } =
	contactFormSlice.actions;

export default contactFormSlice.reducer;
