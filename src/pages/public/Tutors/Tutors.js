import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllTutors } from '../../../store/thunks';
import TutorCard from '../../../components/features/TutorCard/TutorCard';
import Wrapper from '../../../components/layout/Wrapper';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import SearchBar from '../../../components/features/SearchBar/SearchBar';
import noTutorFound from '../../../assets/img/noTutorFound.png';
import { TutorsGrid, NoResultsMessage } from './Tutors.styled';
import { CustomPagination } from '../../../components';

const Tutors = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const tutors = useSelector(state => state.tutors.tutors);
	const totalPages = useSelector(state => state.tutors.totalPages);

	const query = new URLSearchParams(location.search);
	const page = query.get('page') || 1;
	const search = query.get('search') || '';

	useEffect(() => {
		dispatch(getAllTutors({ page, limit: 6, search }));
	}, [dispatch, page, search]);

	const handleSearch = searchValue => {
		navigate(`/tutors?page=1${searchValue ? '&search=' + encodeURIComponent(searchValue) : ''}`);
	};

	const handlePageClick = event => {
		const newPage = event.selected + 1;
		navigate(`/tutors?page=${newPage}${search ? '&search=' + search : ''}`);
	};

	return (
		<Wrapper>
			<div style={{ marginTop: '6rem' }}></div>
			<IntersectionTitle title={'Tutors'} text={'Find your tutor'} />
			<SearchBar onSearch={handleSearch} />
			{tutors.length > 0 ? (
				<>
					<TutorsGrid>
						{tutors.map(tutor => (
							<TutorCard key={tutor._id} tutor={tutor} />
						))}
					</TutorsGrid>

					{totalPages > 1 && (
						<CustomPagination
							pageCount={totalPages}
							onPageChange={handlePageClick}
							currentPage={parseInt(page)}
						/>
					)}
				</>
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
