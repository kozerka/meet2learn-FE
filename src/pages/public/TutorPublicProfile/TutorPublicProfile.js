import { useParams } from 'react-router-dom';
import Tabs from '../../../components/layout/Tabs/Tabs';
import Wrapper from '../../../components/layout/Wrapper';
import PersonalCard from '../../../components/features/TutorPublicProfile/PersonalCard';
import AboutCard from '../../../components/features/TutorPublicProfile/About';
import { LinkStyled } from '../../../components/ui/Link.styled';
import Button from '../../../components/ui/Button';
import Reviews from '../../../components/features/Reviews/Reviews';
import FeedbackForm from '../../../components/features/FeedbackForm/FeedbackForm';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTutorById } from '../../../store/slices/tutorSlice';
import { getTutorReviews } from '../../../store/slices/reviewSlice';
import { fetchUser } from '../../../store/slices/userSlice';
import Loader from '../../../components/ui/Loader/Loader';
const TutorPublicProfile = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { tutor, isLoading: isTutorLoading } = useSelector(state => state.tutors);
	const { reviews, isLoading: isReviewsLoading } = useSelector(state => state.reviews);
	const [editingReview, setEditingReview] = useState(null);

	useEffect(() => {
		if (id) {
			dispatch(getTutorById(id));
			dispatch(getTutorReviews(id));
			dispatch(fetchUser());
		}
	}, [dispatch, id]);

	const handleEditReview = review => {
		setEditingReview(review);
	};

	if (isTutorLoading || isReviewsLoading) {
		return <Loader />;
	}
	if (!tutor) {
		return <div>Tutor not found</div>;
	}
	return (
		<Wrapper>
			<PersonalCard user={tutor} />
			<Tabs
				tabs={[
					{
						label: 'About',
						content: (
							<AboutCard about={tutor.about} bio={tutor.bio} experiences={tutor.experiences} />
						),
					},

					{
						label: 'Reviews',
						content: (
							<>
								{tutor && tutor.reviews && (
									<Reviews reviews={reviews} tutorId={id} onEditReview={handleEditReview} />
								)}
								<FeedbackForm tutorId={id} reviewData={editingReview} />
							</>
						),
					},
				]}
			/>
			<LinkStyled to={'/tutors'}>
				<Button $primary={true}>Back to Tutors Page</Button>
			</LinkStyled>
		</Wrapper>
	);
};

export default TutorPublicProfile;
