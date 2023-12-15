import * as Yup from 'yup';

export const contactFormSchema = Yup.object({
	username: Yup.string()
		.min(3, 'Username should be 3 characters long!')
		.required('This field is required!'),
	email: Yup.string().email('Invalid email format').required('This field is required!'),
	messageTitle: Yup.string()
		.min(3, 'Title should be 3-80 characters long!')
		.max(80, 'Title should be 3-80 characters long!')
		.required('This field is required!'),
	messageBody: Yup.string()
		.min(15, 'Message should be 15-500 characters long!')
		.max(500, 'Message should be 15-500 characters long!')
		.required('This field is required!'),
	agreeTerms: Yup.boolean().oneOf([true], 'Please agree to the processing of your data.'),
});
