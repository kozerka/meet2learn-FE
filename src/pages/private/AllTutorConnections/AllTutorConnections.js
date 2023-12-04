import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeetings } from '../../../store/slices/meetingSlice';
import { CustomContainer } from '../../../components/ui/Containers';
import { SectionTitle } from '../../../components';
import MeetingList from '../../../components/features/LearningConnectionsList/LearningConnections';
import {
	TutorMessage,
	StudentMessage,
} from '../../../components/features/LearningConnectionsList/MessagesForParticipants';
const AllTutorConnections = () => {
	const dispatch = useDispatch();
	const { meetings, isLoading } = useSelector(state => state.meetings);
	const userAuth = useSelector(state => state.user.userAuth);

	useEffect(() => {
		dispatch(getAllMeetings());
	}, [dispatch]);

	if (isLoading) {
		return <div>Loading...</div>;
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
