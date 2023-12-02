import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Reviews = ({ reviews }) => (
	<ReviewsContainer>
		<h2>All Reviews ({reviews.length})</h2>
		{reviews.map(review => (
			<ReviewItem key={review._id}>
				<ReviewHeader>
					<Avatar src={review.student?.avatar} alt={review.student?.name} />
					<div>
						<p>{review.student?.name}</p>
						<p>{new Date(review.createdAt).toLocaleDateString()}</p>
					</div>
					<Rating>{'⭐'.repeat(review.rating)}</Rating>
				</ReviewHeader>
				<ReviewContent>{review.reviewText}</ReviewContent>
			</ReviewItem>
		))}
	</ReviewsContainer>
);

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
};

export default Reviews;
