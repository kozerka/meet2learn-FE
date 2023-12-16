import contactFormReducer, {
	updateFormData,
	updateConsent,
	resetFormData,
	setStatus,
	setError,
} from './contactFormSlice';
import { sendContactForm } from '../thunks';

describe('contactFormReducer', () => {
	const initialState = {
		formData: {
			username: '',
			email: '',
			messageTitle: '',
			messageBody: '',
		},
		agreeTerms: false,
		status: 'idle',
		error: null,
	};

	test('should handle initial state', () => {
		expect(contactFormReducer(undefined, { type: 'unknown' })).toEqual(initialState);
	});

	test('should handle updateFormData', () => {
		const updatedData = { username: 'John Doe', email: 'john@example.com' };
		expect(contactFormReducer(initialState, updateFormData(updatedData))).toEqual({
			...initialState,
			formData: { ...initialState.formData, ...updatedData },
		});
	});

	test('should handle updateConsent', () => {
		expect(contactFormReducer(initialState, updateConsent(true))).toEqual({
			...initialState,
			agreeTerms: true,
		});
	});

	test('should handle resetFormData', () => {
		const modifiedState = {
			...initialState,
			formData: { username: 'John', email: 'john@example.com' },
			agreeTerms: true,
		};
		expect(contactFormReducer(modifiedState, resetFormData())).toEqual(initialState);
	});
	test('should handle setStatus', () => {
		const newStatus = 'loading';
		expect(contactFormReducer(initialState, setStatus(newStatus))).toEqual({
			...initialState,
			status: newStatus,
		});
	});

	test('should handle setError', () => {
		const errorMessage = 'Error occurred';
		expect(contactFormReducer(initialState, setError(errorMessage))).toEqual({
			...initialState,
			error: errorMessage,
		});
	});
	test('should handle sendContactForm.pending', () => {
		const action = { type: sendContactForm.pending.type };
		expect(contactFormReducer(initialState, action)).toEqual({
			...initialState,
			status: 'loading',
		});
	});

	test('should handle sendContactForm.fulfilled', () => {
		const action = { type: sendContactForm.fulfilled.type };
		expect(contactFormReducer(initialState, action)).toEqual({
			...initialState,
			status: 'succeeded',
			error: null,
		});
	});

	test('should handle sendContactForm.rejected', () => {
		const action = { type: sendContactForm.rejected.type, payload: 'Error message' };
		expect(contactFormReducer(initialState, action)).toEqual({
			...initialState,
			status: 'failed',
			error: 'Error message',
		});
	});
});
