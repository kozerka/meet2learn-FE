import * as Yup from 'yup';

export const conversationSchema = Yup.object().shape({
	conversationText: Yup.string()
		.max(500, 'Message cannot be longer than 500 characters')
		.required('Message is required'),
});
