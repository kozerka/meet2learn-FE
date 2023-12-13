import PropTypes from 'prop-types';
import { BasicProfileCard } from '../';
import { UserInfo } from './ParticipantInfo.styled';

const ParticipantInfo = ({ user, role }) => (
	<UserInfo>
		<BasicProfileCard user={user} />
		<span>
			{role}: {user.name}
		</span>
	</UserInfo>
);

ParticipantInfo.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		_id: PropTypes.string.isRequired,
	}),
	role: PropTypes.oneOf(['student', 'tutor']).isRequired,
};

export default ParticipantInfo;
