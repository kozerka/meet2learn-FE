import { useFormik } from 'formik';
import { postFormSchema } from '../schemas';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../store/thunks';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const usePostForm = (initialPost, isEditing) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			title: isEditing && initialPost ? initialPost.title : '',
			text: isEditing && initialPost ? initialPost.text : '',
			category: isEditing && initialPost ? initialPost.category : 'other',
		},
		validationSchema: postFormSchema,
		onSubmit: (values, { resetForm }) => {
			const action = isEditing
				? updatePost({ postId: initialPost._id, updateData: values })
				: createPost(values);

			dispatch(action)
				.then(() => {
					toast.success(`Post ${isEditing ? 'updated' : 'created'} successfully`);
					navigate('/dashboard/forum');
				})
				.catch(error => {
					toast.error(`Error ${isEditing ? 'updating' : 'creating'} post: ` + error.message);
				});

			resetForm();
		},
	});

	return formik;
};
