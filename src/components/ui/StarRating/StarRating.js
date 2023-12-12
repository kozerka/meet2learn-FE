import { useState } from 'react';
import PropTypes from 'prop-types';
import { StarInput, StarRatingContainer, StyledStar } from './StarRating.styled';
export const StarRating = ({ onChangeRating }) => {
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
