import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { sendContactForm } from './contactFormThunks';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('sendContactForm thunk', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			contactForm: {
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
		});
	});

	test('creates success when sending contact form is successful', async () => {
		const formData = { name: 'John Doe', message: 'Hello' };
		const response = { data: 'Form sent successfully' };
		axios.post.mockResolvedValue(response);

		await store.dispatch(sendContactForm(formData));

		const actions = store.getActions();
		expect(actions[0].type).toBe('contactForm/sendContactForm/pending');
		expect(actions[1].type).toBe('contactForm/sendContactForm/fulfilled');
		expect(actions[1].payload).toEqual('Form sent successfully');
	});

	test('handles failure when sending contact form fails', async () => {
		const errorMessage = 'Failed to send contact form';
		axios.post.mockRejectedValue({
			response: { data: errorMessage, status: 400 },
		});

		await store.dispatch(sendContactForm({ name: 'John Doe', message: 'Hello' }));

		const actions = store.getActions();
		expect(actions[0].type).toBe('contactForm/sendContactForm/pending');
		expect(actions[1].type).toBe('contactForm/sendContactForm/rejected');
		expect(actions[1].payload).toContain(errorMessage);
	});
});
