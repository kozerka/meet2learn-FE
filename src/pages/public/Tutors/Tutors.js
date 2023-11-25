import TutorCard from '../../../components/features/TutorCard/TutorCard';
import Wrapper from '../../../components/layout/Wrapper';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import { useState } from 'react';
import { tutorsData } from '../../../data/tutorsData';
import SearchBar from '../../../components/features/SearchBar/SearchBar';
import noTutorFound from '../../../assets/img/noTutorFound.png';

import { TutorsGrid, NoResultsMessage } from './Tutors.styled';

const Tutors = () => {
	const [filteredTutors, setFilteredTutors] = useState(tutorsData);

	const handleSearch = searchValue => {
		const filtered = tutorsData.filter(
			tutor =>
				tutor.name.toLowerCase().includes(searchValue.toLowerCase()) ||
				tutor.categories.some(category =>
					category.toLowerCase().includes(searchValue.toLowerCase())
				)
		);
		setFilteredTutors(filtered);
	};

	return (
		<Wrapper>
			<div style={{ marginTop: '6rem' }}></div>
			<IntersectionTitle title={'Tutors'} text={'Find your tutor'} />
			<SearchBar onSearch={handleSearch} />
			{filteredTutors.length > 0 ? (
				<TutorsGrid>
					{filteredTutors.map(tutor => (
						<TutorCard key={tutor.id} tutor={tutor} />
					))}
				</TutorsGrid>
			) : (
				<NoResultsMessage>
					<img src={noTutorFound} alt={'No Tutor Found'} />
					<h3>No Tutor match search criteria</h3>
					<p>Try using different keywords</p>
				</NoResultsMessage>
			)}
		</Wrapper>
	);
};

export default Tutors;
