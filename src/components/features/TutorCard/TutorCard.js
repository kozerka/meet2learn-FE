import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import {
	TutorCardWrapper,
	ImageContainer,
	ItemInfo,
	TopSection,
	Name,
	Rating,
	Categories,
	CategoryLabel,
	Divider,
	Reviews,
	ViewProfileButton,
} from './TutorCard.styled';
const TutorCard = ({ tutor }) => {
	const navigate = useNavigate();

	const viewProfile = () => {
		navigate(`/tutors/${tutor.id}`);
	};

	return (
		<TutorCardWrapper>
			<ImageContainer>
				<img src={tutor.image} alt={tutor.name} />
			</ImageContainer>
			<ItemInfo>
				<TopSection>
					<Name>{tutor.name}</Name>
					<Rating>
						<FaStar /> {tutor.rating}
					</Rating>
				</TopSection>
				<Categories>
					{tutor.categories.map((category, index) => (
						<CategoryLabel key={index}>{category}</CategoryLabel>
					))}
				</Categories>
				<Divider />
				<Reviews>{`${tutor.numberOfReviews} Reviews from all users`}</Reviews>
			</ItemInfo>
			<ViewProfileButton onClick={viewProfile}>View Profile</ViewProfileButton>
		</TutorCardWrapper>
	);
};

TutorCard.propTypes = {
	tutor: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		categories: PropTypes.arrayOf(PropTypes.string).isRequired,
		rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		numberOfReviews: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	}).isRequired,
};

export default TutorCard;
