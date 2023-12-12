import PropTypes from 'prop-types';
import {
	CardContainer,
	ImageContainer,
	ContentContainer,
	Name,
	Info,
} from './BasicProfileCard.styled';
const BasicProfileCard = ({ user }) => (
	<CardContainer>
		<ImageContainer>
			<img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
		</ImageContainer>
		<ContentContainer>
			<Name>
				{user.firstName} {user.lastName}
			</Name>
			<Info>Email: {user.email}</Info>
		</ContentContainer>
	</CardContainer>
);

BasicProfileCard.propTypes = {
	user: PropTypes.shape({
		email: PropTypes.string.isRequired,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		name: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
	}).isRequired,
};

export default BasicProfileCard;
