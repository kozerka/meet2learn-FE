import { useState, useEffect } from 'react';
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
import { addReview, getTutorReviews, updateReview } from '../../../store/slices/reviewSlice';
import { getTutorById } from '../../../store/slices/tutorSlice';
import { toast } from 'react-toastify';

const FeedbackForm = ({ tutorId, reviewData }) => {
	const userAuth = useSelector(state => state.user.userAuth);
	const userData = useSelector(state => state.user.userData);
	const [showForm, setShowForm] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsEditMode(!!reviewData);
		setShowForm(!!reviewData);
	}, [reviewData]);
	const handleFeedbackButtonClick = () => {
		if (!userAuth.userInfo) {
			toast.error('You must be logged in to give feedback');
			return;
		}
		if (userData.role === 'tutor') {
			toast.error('Tutors cannot give feedback to each other');
			return;
		}
		setShowForm(!showForm);
		setIsEditMode(false);
	};
	const onSubmitFeedback = async (values, resetForm) => {
		try {
			if (isEditMode) {
				await dispatch(
					updateReview({
						reviewId: reviewData._id,
						reviewData: values,
					})
				).unwrap();
				toast.success('Review updated successfully');
			} else {
				await dispatch(
					addReview({
						tutorId,
						reviewData: values,
					})
				).unwrap();
				toast.success('Review added successfully');
			}
			resetForm();
			setShowForm(false);
			setIsEditMode(false);
			dispatch(getTutorReviews(tutorId));
			dispatch(getTutorById(tutorId));
		} catch (error) {
			toast.error('Error: ' + error.message || 'Failed to process review');
		}
	};

	const formik = useFormik({
		initialValues: {
			rating: isEditMode ? (reviewData ? reviewData.rating : 0) : 0,
			reviewText: isEditMode ? (reviewData ? reviewData.reviewText : '') : '',
		},
		validationSchema: feedbackFormSchema,
		onSubmit: (values, { resetForm }) => onSubmitFeedback(values, resetForm),
	});

	return (
		<FeedbackContainer>
			<Button $secondary onClick={handleFeedbackButtonClick}>
				{showForm ? 'Hide Feedback Form' : 'Give Feedback'}
			</Button>

			{showForm && userAuth.userInfo && (
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
	reviewData: PropTypes.object,
};

export default FeedbackForm;
