import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createComment, getPosts, getPostsByUserId } from '../../../../store/thunks';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Button, FormField } from '../../../ui';
import { commentPostSchema } from '../../../../schemas';

const CommentForm = ({ postId, userId }) => {
	const dispatch = useDispatch();

	const formik = useFormik({
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
				dispatch(getPostsByUserId(userId));
			} catch (error) {
				console.error(error);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<FormField
				label={'Comment'}
				name={'comment'}
				type={'textarea'}
				rows={4}
				errors={formik.errors}
				touched={formik.touched}
				handleChange={formik.handleChange}
				handleBlur={formik.handleBlur}
				values={formik.values}
			/>
			<Button $small type={'submit'}>
				Submit
			</Button>
		</form>
	);
};

CommentForm.propTypes = {
	postId: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
};

export default CommentForm;
