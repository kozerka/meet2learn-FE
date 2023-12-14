import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeetings } from '../../../store/thunks';
import { CustomContainer, Loader, SectionTitle } from '../../../components/ui';
import { TutorMessage, StudentMessage, MeetingList } from '../../../components/features/';

const AllTutorConnections = () => {
	const dispatch = useDispatch();
	const { meetings, isLoading } = useSelector(state => state.meetings);
	const [meetingsFetched, setMeetingsFetched] = useState(false);
	const userAuth = useSelector(state => state.user.userAuth);

	useEffect(() => {
		dispatch(getAllMeetings()).then(() => {
			setMeetingsFetched(true);
		});
	}, [dispatch]);

	if (isLoading) {
		return <Loader />;
	}

	if (meetings.length === 0) {
		return (
			<CustomContainer>
				<SectionTitle size={'big'} title={'All Connections'} />
				{userAuth.userInfo.role === 'tutor' ? <TutorMessage /> : <StudentMessage />}
			</CustomContainer>
		);
	}

	return meetingsFetched ? <MeetingList meetings={meetings} /> : null;
};

export default AllTutorConnections;
