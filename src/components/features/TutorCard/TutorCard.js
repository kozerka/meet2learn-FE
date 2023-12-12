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
	const profileComplete = tutor.firstName && tutor.lastName;

	const viewProfile = () => {
		navigate(`/tutors/${tutor._id}`);
	};
	if (!profileComplete) {
		return (
			<TutorCardWrapper>
				<ImageContainer>
					<img src={tutor.avatar} alt={'Pending profile'} />
				</ImageContainer>
				<ItemInfo>
					<TopSection>
						<Name>Pending Profile...</Name>
					</TopSection>
					<Reviews>Wait till tutor profile is complete.</Reviews>
				</ItemInfo>
			</TutorCardWrapper>
		);
	}

	return (
		<TutorCardWrapper>
			<ImageContainer>
				<img src={tutor.avatar} alt={tutor.name} />
			</ImageContainer>
			<ItemInfo>
				<TopSection>
					<Name>
						{tutor.firstName} {tutor.lastName}
					</Name>
					<Rating>
						<FaStar /> {tutor.averageRating}
					</Rating>
				</TopSection>
				<Categories>
					{tutor.subjects.map((subject, index) => (
						<CategoryLabel key={index}>{subject.name}</CategoryLabel>
					))}
				</Categories>
				<Divider />
				<Reviews>{`${tutor.totalRating} Reviews from all users`}</Reviews>
			</ItemInfo>
			<ViewProfileButton onClick={viewProfile}>View Profile</ViewProfileButton>
		</TutorCardWrapper>
	);
};

TutorCard.propTypes = {
	tutor: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		subjects: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
			})
		).isRequired,
		averageRating: PropTypes.number.isRequired,
		totalRating: PropTypes.number.isRequired,
	}).isRequired,
};

export default TutorCard;
