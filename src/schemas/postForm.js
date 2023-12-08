import * as Yup from 'yup';

export const postFormSchema = Yup.object({
	title: Yup.string().min(3, 'Title must be at least 3 characters').required('Title is required'),
	text: Yup.string().test(
		'text-content-length',
		'Text in the editor must be at least 15 characters including spaces',
		value => {
			const textOnly = value ? value.replace(/<[^>]*>?/gm, '') : '';
			return textOnly.length >= 15;
		}
	),
});
