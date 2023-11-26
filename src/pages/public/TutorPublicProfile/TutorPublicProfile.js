import { useParams } from 'react-router-dom';
import Tabs from '../../../components/layout/Tabs/Tabs';
import Wrapper from '../../../components/layout/Wrapper';
import { tutorsData } from '../../../data/tutorsData';
import PersonalCard from '../../../components/features/TutorPublicProfile/PersonalCard';
import AboutCard from '../../../components/features/TutorPublicProfile/About';
import { LinkStyled } from '../../../components/ui/Link.styled';
import Button from '../../../components/ui/Button';
import { reviewsData } from '../../../data/reviewsData';
import Reviews from '../../../components/features/Reviews/Reviews';
import FeedbackForm from '../../../components/features/FeedbackForm/FeedbackForm';
const TutorPublicProfile = () => {
	const { id } = useParams();
	const tutor = tutorsData.find(t => t.id === id);
	const handleAddReview = reviewData => {
		console.log('New review data:', reviewData);
		// Tutaj logika dodawania recenzji (np. wysyłanie do API)
	};
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
								<Reviews reviews={reviewsData} />
								<FeedbackForm onSubmitFeedback={handleAddReview} />
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
