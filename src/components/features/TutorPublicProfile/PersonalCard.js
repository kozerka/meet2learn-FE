import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import Button from '../../ui/Button';
import { LinkStyled } from '../../ui/Link.styled';
import {
	CardContainer,
	ImageContainer,
	ContentContainer,
	Name,
	Info,
	RatingLabel,
	SubjectLabel,
} from './PersonalCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { createMeeting, getAllMeetings } from '../../../store/slices/meetingSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PersonalCard = ({ user }) => {
	const dispatch = useDispatch();
	const userAuth = useSelector(state => state.user.userAuth);
	const navigate = useNavigate();
	const userInfo = userAuth?.userInfo;

	const handleConnectClick = async () => {
		if (!userAuth?.userInfo) {
			toast.error('You must be logged in to make a connection with this tutor');
			return;
		}
		if (userInfo.role === 'tutor') {
			toast.error('Tutors cannot connect with each other');
			return;
		}
		const allMeetings = await dispatch(getAllMeetings()).unwrap();
		const hasMeetingWithTutor = allMeetings.some(meeting => meeting.tutor._id === user._id);

		if (hasMeetingWithTutor) {
			toast.error('You already have a meeting with this tutor');
			return;
		}

		const meetingData = {
			tutor: user._id,
			student: userInfo._id,
		};

		dispatch(createMeeting(meetingData))
			.then(() => {
				toast.success('Connection with tutor successful - go to TUTORING on your dashboard');
				navigate('/dashboard');
			})
			.catch(error => {
				console.error('Connection failed:', error);
			});
	};

	return (
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
					<Info>
						Subjects:
						{user.subjects.map((subject, index) => (
							<SubjectLabel key={index}>{subject.name}</SubjectLabel>
						))}
					</Info>
				</div>
				<LinkStyled to={'/'}>
					<Button $primary={true} onClick={handleConnectClick}>
						Connect
					</Button>
				</LinkStyled>
			</ContentContainer>
			<RatingLabel>
				<FaStar className={'star-icon'} /> {user.averageRating}
			</RatingLabel>
		</CardContainer>
	);
};

PersonalCard.propTypes = {
	user: PropTypes.shape({
		email: PropTypes.string.isRequired,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		age: PropTypes.number,
		city: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		subjects: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		).isRequired,
		averageRating: PropTypes.number.isRequired,
		avatar: PropTypes.string.isRequired,
		_id: PropTypes.string.isRequired,
		role: PropTypes.string.isRequired,
	}).isRequired,
};

export default PersonalCard;
