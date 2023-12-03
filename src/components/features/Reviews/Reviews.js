import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteReview, getTutorReviews } from '../../../store/slices/reviewSlice';
import { getTutorById } from '../../../store/slices/tutorSlice';
import { toast } from 'react-toastify';
const ReviewsContainer = styled.div`
	margin-top: 20px;
`;

const ReviewItem = styled.div`
	padding: 15px;
	border-bottom: 1px solid #ccc;
`;

const ReviewHeader = styled.div`
	display: flex;
	align-items: center;
`;

const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 10px;
`;

const ReviewContent = styled.div`
	margin-top: 10px;
`;

const Rating = styled.div`
	margin-left: auto;
`;

const Reviews = ({ reviews, tutorId }) => {
	const dispatch = useDispatch();
	const userId = useSelector(state => state.user.userAuth?.userInfo?._id);
	const [setEditingReview] = useState(null);

	const handleEdit = review => {
		setEditingReview({ id: review._id, rating: review.rating, reviewText: review.reviewText });
		// Logika do otwarcia formularza edycji, np. setShowForm(true) w kontekście wyższego komponentu
	};

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
				// Tutaj umieszczamy console.log
				console.log(
					`Review ID: ${review._id}, Student ID: ${review.student._id}, User ID: ${userId}`
				);

				return (
					<ReviewItem key={review._id}>
						<ReviewHeader>
							<Avatar src={review.student.avatar} alt={review.student.name} />
							<div>
								<p>{review.student.name}</p>
								<p>{new Date(review.createdAt).toLocaleDateString()}</p>
							</div>
							<Rating>{'⭐'.repeat(review.rating)}</Rating>
						</ReviewHeader>
						<ReviewContent>{review.reviewText}</ReviewContent>
						{/* Wyświetlanie przycisków edycji/usuwania tylko dla autora recenzji */}
						{userId === review.student._id && (
							<div>
								<button onClick={() => handleEdit(review)}>Edit</button>
								<button onClick={() => handleDelete(review._id)}>Delete</button>
							</div>
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
			student: PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				avatar: PropTypes.string.isRequired,
			}).isRequired,
			reviewText: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
			createdAt: PropTypes.string.isRequired,
		})
	).isRequired,
	tutorId: PropTypes.string.isRequired,
};

export default Reviews;
