import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import Button from '../../ui/Button';
import { ErrorText } from '../../ui/ErrorText.styled';
import StarRating from '../../ui/StarRating';
import { feedbackFormSchema } from '../../../schemas';
import {
	FeedbackContainer,
	TextArea,
	ErrorContainer,
	ButtonContainer,
} from './FeedbackForm.styled';
const FeedbackForm = ({ onSubmitFeedback }) => {
	const [showForm, setShowForm] = useState(false);

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
	onSubmitFeedback: PropTypes.func.isRequired,
};

export default FeedbackForm;
