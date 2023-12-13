import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeetings } from '../../../store/thunks';
import { CustomContainer, Loader, SectionTitle } from '../../../components/ui';
import { TutorMessage, StudentMessage, MeetingList } from '../../../components/features/';

const AllTutorConnections = () => {
	const dispatch = useDispatch();
	const { meetings, isLoading } = useSelector(state => state.meetings);
	const userAuth = useSelector(state => state.user.userAuth);

	useEffect(() => {
		dispatch(getAllMeetings());
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

	return <MeetingList meetings={meetings} />;
};

export default AllTutorConnections;
