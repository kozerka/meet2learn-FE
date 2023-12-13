import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createComment, getPosts, getPostsByUserId } from '../store/thunks';
import { toast } from 'react-toastify';
import { commentPostSchema } from '../schemas';

export const useCommentForm = (postId, userId) => {
	const dispatch = useDispatch();

	return useFormik({
		initialValues: {
			comment: '',
		},
		validationSchema: commentPostSchema,
		onSubmit: async (values, { resetForm }) => {
			try {
				await dispatch(createComment({ postId, commentData: { text: values.comment } })).unwrap();
				resetForm();
				toast.success('Comment added successfully');
				dispatch(getPosts());
				if (userId) {
					dispatch(getPostsByUserId(userId));
				}
			} catch (error) {
				console.error(error);
			}
		},
	});
};
