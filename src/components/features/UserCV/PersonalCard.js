import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import Button from '../../ui/Button';
import { LinkStyled } from '../../ui/Link.styled';

const CardContainer = styled.div`
	margin-top: 10rem;
	display: flex;
	align-self: start;
	background: ${({ theme }) => theme.background};
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	position: relative;
`;

const ImageContainer = styled.div`
	flex: 1;
	img {
		width: 100%;
		max-width: 400px;
		height: auto;
		border-radius: 8px;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 2;
	margin-left: 2rem;
	padding-left: 1rem;
	justify-content: space-between;
`;

const Name = styled.h2`
	font-size: 1.5rem;
	margin: 0;
`;

const Info = styled.p`
	margin: 5px 0;
	font-size: 1rem;
`;

const RatingLabel = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
	background-color: ${({ theme }) => theme.secondary};
	padding: 5px 10px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	font-size: 1rem;

	.star-icon {
		margin-right: 5px;
		color: #ffd700;
	}
`;

const PersonalCard = ({ user }) => (
	<CardContainer>
		<ImageContainer>
			<img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
		</ImageContainer>
		<ContentContainer>
			<Name>
				{user.firstName} {user.lastName}
			</Name>
			<div>
				<Info>Email: {user.email}</Info>
				<Info>Age: {user.age}</Info>
				<Info>
					Location: {user.city}, {user.country}
				</Info>
				<Info>Subjects: {user.subjects.join(', ')}</Info>
			</div>
			<LinkStyled to={'/'}>
				<Button $primary={true}>Connect</Button>
			</LinkStyled>
		</ContentContainer>
		<RatingLabel>
			<FaStar className="star-icon" /> {user.averageRating}
		</RatingLabel>
	</CardContainer>
);

PersonalCard.propTypes = {
	user: PropTypes.shape({
		email: PropTypes.string.isRequired,
		firstName: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		city: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
		averageRating: PropTypes.number.isRequired,
		avatar: PropTypes.string.isRequired,
	}).isRequired,
};

export default PersonalCard;
