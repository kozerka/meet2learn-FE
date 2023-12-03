import SingleTutorConnection from '../../../pages/private/SingleTutorConnection/SingleTutorConnection';
import PropTypes from 'prop-types';

const MeetingList = ({ meetings }) => (
	<div style={{ width: '100%' }}>
		{meetings.map(meeting => (
			<SingleTutorConnection key={meeting._id} meeting={meeting} />
		))}
	</div>
);

MeetingList.propTypes = {
	meetings: PropTypes.array.isRequired,
};

export default MeetingList;
