import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StarInput = styled.input`
	display: none;
	cursor: pointer;
	size: 30px;
`;

const StarRatingContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-top: 2rem;
	margin-bottom: 1rem;
`;

const StyledStar = styled(FaStar)`
	cursor: pointer;

	:hover {
		color: #ffc107;
	}
`;

const StarRating = ({ onChangeRating }) => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);
	const handleRatingChange = ratingValue => {
		setRating(ratingValue);
		onChangeRating(ratingValue);
	};

	return (
		<StarRatingContainer>
			{[...Array(5)].map((star, index) => {
				const ratingValue = index + 1;
				return (
					<label key={ratingValue}>
						<StarInput
							type={'radio'}
							name={'rating'}
							value={ratingValue}
							onClick={() => handleRatingChange(ratingValue)}
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}
						/>
						<StyledStar
							size={'2rem'}
							color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
						/>
					</label>
				);
			})}
			<p>Your rating is: {rating}</p>
		</StarRatingContainer>
	);
};

StarRating.propTypes = {
	onChangeRating: PropTypes.func.isRequired,
};

export default StarRating;
