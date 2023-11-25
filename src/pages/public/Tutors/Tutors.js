import TutorCard from '../../../components/features/TutorCard/TutorCard';
import Wrapper from '../../../components/layout/Wrapper';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import styled from 'styled-components';

const TutorsGrid = styled.div`
	display: grid;
	gap: 4rem;
	margin: 2rem auto;
	padding: 1rem;

	@media (min-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 768px) and (max-width: 1199px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;
const Tutors = () => {
	return (
		<Wrapper>
			<div style={{ marginTop: '6rem' }}></div>
			<IntersectionTitle title={'Tutors'} text={'Find your tutor'} />
			<div>search bar</div>
			<TutorsGrid>
				<TutorCard
					tutor={{
						id: '123',
						image: 'https://picsum.photos/200/300',
						name: 'Jane Doe',
						categories: ['Math', 'Science'],
						rating: '4.5',
						numberOfReviews: '25',
					}}
				/>
				<TutorCard
					tutor={{
						id: '123',
						image: 'https://picsum.photos/200/300',
						name: 'Jane Doe',
						categories: ['Math', 'Science'],
						rating: '4.5',
						numberOfReviews: '25',
					}}
				/>
				<TutorCard
					tutor={{
						id: '123',
						image: 'https://picsum.photos/200/300',
						name: 'Jane Doe',
						categories: ['Math', 'Science'],
						rating: '4.5',
						numberOfReviews: '25',
					}}
				/>
				<TutorCard
					tutor={{
						id: '123',
						image: 'https://picsum.photos/200/300',
						name: 'Jane Doe',
						categories: ['Math', 'Science'],
						rating: '4.5',
						numberOfReviews: '25',
					}}
				/>
				<TutorCard
					tutor={{
						id: '123',
						image: 'https://picsum.photos/200/300',
						name: 'Jane Doe',
						categories: ['Math', 'Science'],
						rating: '4.5',
						numberOfReviews: '25',
					}}
				/>
				<TutorCard
					tutor={{
						id: '123',
						image: 'https://picsum.photos/200/300',
						name: 'Jane Doe',
						categories: ['Math', 'Science'],
						rating: '4.5',
						numberOfReviews: '25',
					}}
				/>
				<TutorCard
					tutor={{
						id: '123',
						image: 'https://picsum.photos/200/300',
						name: 'Jane Doe',
						categories: ['Math', 'Science'],
						rating: '4.5',
						numberOfReviews: '25',
					}}
				/>
				<TutorCard
					tutor={{
						id: '123',
						image: 'https://picsum.photos/200/300',
						name: 'Jane Doe',
						categories: ['Math', 'Science'],
						rating: '4.5',
						numberOfReviews: '25',
					}}
				/>
				<TutorCard
					tutor={{
						id: '123',
						image: 'https://picsum.photos/200/300',
						name: 'Jane Doe',
						categories: ['Math', 'Science'],
						rating: '4.5',
						numberOfReviews: '25',
					}}
				/>
			</TutorsGrid>
		</Wrapper>
	);
};

export default Tutors;
