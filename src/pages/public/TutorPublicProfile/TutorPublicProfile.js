import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTutorData } from '../../../hooks';
import Tabs from '../../../components/layout/Tabs/Tabs';
import Wrapper from '../../../components/layout/Wrapper';
import PersonalCard from '../../../components/features/TutorPublicProfile/PersonalCard';
import AboutCard from '../../../components/features/TutorPublicProfile/About';
import { Button, Loader, LinkStyled } from '../../../components/ui';
import Reviews from '../../../components/features/Reviews/Reviews';
import { FeedbackForm } from '../../../components/features/Forms';

const TutorPublicProfile = () => {
	const { id } = useParams();
	const { tutor, reviews, isLoading, editingReview, setEditingReview } = useTutorData(id);

	const tabsContent = useMemo(
		() =>
			tutor
				? [
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
									{reviews && (
										<Reviews reviews={reviews} tutorId={id} onEditReview={setEditingReview} />
									)}
									<FeedbackForm tutorId={id} reviewData={editingReview} />
								</>
							),
						},
				  ]
				: [],
		[tutor, reviews, id, editingReview, setEditingReview]
	);

	if (isLoading) {
		return <Loader />;
	}

	if (!tutor) {
		return <div>Tutor not found</div>;
	}

	return (
		<Wrapper>
			<PersonalCard user={tutor} />
			<Tabs tabs={tabsContent} />
			<LinkStyled to={'/tutors'}>
				<Button $primary={true}>Back to Tutors Page</Button>
			</LinkStyled>
		</Wrapper>
	);
};

export default TutorPublicProfile;
