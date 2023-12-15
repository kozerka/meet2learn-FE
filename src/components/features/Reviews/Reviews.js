import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getTutorById, deleteReview, getTutorReviews } from '../../../store/thunks';
import { toast } from 'react-toastify';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

import {
	ReviewsContainer,
	ReviewItem,
	ReviewHeader,
	Avatar,
	Rating,
	IconContainer,
	ReviewContent,
} from './Reviews.styled';

const Reviews = ({ reviews, tutorId, onEditReview }) => {
	const dispatch = useDispatch();
	const userId = useSelector(state => state.user.userAuth?.userInfo?._id);

	const handleDelete = async reviewId => {
		try {
			await dispatch(deleteReview(reviewId)).unwrap();
			toast.success('Review deleted successfully');
			dispatch(getTutorById(tutorId));
			dispatch(getTutorReviews(tutorId));
		} catch (error) {
			toast.error('Error: ' + error.message || 'Failed to delete review');
		}
	};

	return (
		<ReviewsContainer>
			<h2>All Reviews ({reviews.length})</h2>
			{reviews.map(review => {
				return (
					<ReviewItem key={review._id}>
						<ReviewHeader>
							<Avatar src={review.student?.avatar} alt={review.student?.name} />
							<div>
								<p>{review.student?.name}</p>
								<p>{new Date(review.createdAt).toLocaleDateString()}</p>
							</div>
							<Rating>
								{Array.from({ length: review.rating }, (_, i) => (
									<FaStar key={i} color={'gold'} />
								))}
							</Rating>
						</ReviewHeader>
						<ReviewContent>{review.reviewText}</ReviewContent>
						{userId === review.student?._id && (
							<IconContainer>
								<FiEdit size={'1.5rem'} onClick={() => onEditReview(review)} />
								<FiTrash2 size={'1.5rem'} onClick={() => handleDelete(review._id)} />
							</IconContainer>
						)}
					</ReviewItem>
				);
			})}
		</ReviewsContainer>
	);
};

Reviews.propTypes = {
	reviews: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			student: PropTypes.oneOfType([
				PropTypes.shape({
					id: PropTypes.string,
					name: PropTypes.string,
					avatar: PropTypes.string,
				}),
				PropTypes.string,
				PropTypes.oneOf([null, undefined]),
			]),
			reviewText: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
			createdAt: PropTypes.string.isRequired,
		})
	).isRequired,
	tutorId: PropTypes.string.isRequired,
	onEditReview: PropTypes.func.isRequired,
};

export default Reviews;
