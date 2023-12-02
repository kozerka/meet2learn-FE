import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import Button from '../../ui/Button';
import { ErrorText } from '../../ui/ErrorText.styled';
import StarRating from '../../ui/StarRating';
import { feedbackFormSchema } from '../../../schemas';
import { useDispatch, useSelector } from 'react-redux';
import {
	FeedbackContainer,
	TextArea,
	ErrorContainer,
	ButtonContainer,
} from './FeedbackForm.styled';
import { addReview } from '../../../store/slices/reviewSlice';
import { toast } from 'react-toastify';
const FeedbackForm = ({ tutorId }) => {
	const userAuth = useSelector(state => state.user.userAuth);
	const [showForm, setShowForm] = useState(false);
	const dispatch = useDispatch();
	const onSubmitFeedback = async values => {
		try {
			await dispatch(addReview({ tutorId, reviewData: values })).unwrap();
			// setShowForm(false);
			toast.success('Review added successfully');
		} catch (error) {
			toast.error('Error: ' + error.message || 'Failed to add review');
		}
	};

	const formik = useFormik({
		initialValues: {
			rating: null,
			reviewText: '',
		},
		validationSchema: feedbackFormSchema,
		onSubmit: (values, { resetForm }) => {
			onSubmitFeedback(values);
			resetForm();
			setShowForm(false);
		},
	});
	if (!userAuth.userInfo) {
		return null;
	}

	return (
		<FeedbackContainer>
			<Button $secondary onClick={() => setShowForm(!showForm)}>
				{showForm ? 'Hide Feedback Form' : 'Give Feedback Form'}
			</Button>

			{showForm && (
				<form onSubmit={formik.handleSubmit}>
					<StarRating onChangeRating={rating => formik.setFieldValue('rating', rating)} />

					<TextArea
						rows={'5'}
						placeholder={'Share your opinion...'}
						value={formik.values.reviewText}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						name={'reviewText'}
					/>
					<ErrorContainer>
						{formik.touched.reviewText && formik.errors.reviewText && (
							<ErrorText>{formik.errors.reviewText}</ErrorText>
						)}
						{formik.touched.rating && formik.errors.rating && (
							<ErrorText>{formik.errors.rating}</ErrorText>
						)}
					</ErrorContainer>
					<ButtonContainer>
						<Button $primary type={'submit'}>
							Submit Your Review
						</Button>
						<Button
							$secondary
							type={'button'}
							onClick={() => {
								formik.resetForm();
								setShowForm(false);
							}}
						>
							Cancel Feedback
						</Button>
					</ButtonContainer>
				</form>
			)}
		</FeedbackContainer>
	);
};

FeedbackForm.propTypes = {
	tutorId: PropTypes.string.isRequired,
};

export default FeedbackForm;
