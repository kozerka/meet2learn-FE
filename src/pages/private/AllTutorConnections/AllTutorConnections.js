import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeetings } from '../../../store/slices/meetingSlice';
import SingleTutorConnection from '../SingleTutorConnection/SingleTutorConnection';

const AllTutorConnections = () => {
	const dispatch = useDispatch();
	const { meetings, isLoading } = useSelector(state => state.meetings);

	useEffect(() => {
		dispatch(getAllMeetings());
	}, [dispatch]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div style={{ width: '100%' }}>
			{meetings.map(meeting => (
				<SingleTutorConnection key={meeting._id} meeting={meeting} />
			))}
		</div>
	);
};

export default AllTutorConnections;
