import * as Yup from 'yup';
export const noteSchema = Yup.object().shape({
	title: Yup.string()
		.required('Title is required')
		.min(3, 'Title should be 3-20 characters long!')
		.max(20, 'Title should be 3-20 characters long!'),
	content: Yup.string().required('Content is required'),
});
