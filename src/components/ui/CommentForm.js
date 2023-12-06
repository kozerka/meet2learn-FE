import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from '../features/Form/FormField';
import { useDispatch } from 'react-redux';
import { createComment } from '../../store/slices/commentSlice';
import { getPosts } from '../../store/slices/postSlice';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Button from './Button';

const CommentForm = ({ postId }) => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			comment: '',
		},
		validationSchema: Yup.object({
			comment: Yup.string().required('Comment is required'),
		}),
		onSubmit: async (values, { resetForm }) => {
			try {
				await dispatch(createComment({ postId, commentData: { text: values.comment } })).unwrap();
				resetForm();
				toast.success('Comment added successfully');
				dispatch(getPosts());
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
};

export default CommentForm;
