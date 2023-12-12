import * as Yup from 'yup';
export const commentPostSchema = Yup.object().shape({
	comment: Yup.string().required('Comment is required'),
});
