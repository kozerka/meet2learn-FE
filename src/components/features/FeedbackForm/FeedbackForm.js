import PropTypes from 'prop-types';
import { ErrorText, StarRating, Button } from '../../ui';
import {
	FeedbackContainer,
	TextArea,
	ErrorContainer,
	ButtonContainer,
} from './FeedbackForm.styled';
import { useFeedbackForm } from '../../../hooks';

const FeedbackForm = ({ tutorId, reviewData }) => {
	const { formik, showForm, toggleForm, handleFeedbackButtonClick } = useFeedbackForm(
		tutorId,
		reviewData
	);

	return (
		<FeedbackContainer>
			<Button $secondary onClick={handleFeedbackButtonClick}>
				{showForm ? 'Hide Feedback Form' : 'Give Feedback'}
			</Button>

			{showForm && (
				<form onSubmit={formik.handleSubmit}>
					<StarRating
						value={formik.values.rating}
						onChangeRating={rating => formik.setFieldValue('rating', rating)}
					/>

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
								toggleForm();
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
