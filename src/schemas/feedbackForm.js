import * as Yup from 'yup';
export const feedbackFormSchema = Yup.object({
	rating: Yup.number()
		.required('Rating is required!')
		.min(1, 'Please give at least one star or cancel your feedback...'),
	reviewText: Yup.string()
		.required('Review text is required!')
		.min(10, 'Review must be at least 10 characters')
		.max(500, 'Review must be at most 500 characters'),
});
