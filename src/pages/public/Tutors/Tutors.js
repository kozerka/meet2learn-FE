import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllTutors } from '../../../store/thunks';
import { Wrapper } from '../../../components/layout';
import { IntersectionTitle, CustomPagination, Loader } from '../../../components/ui';
import { SearchBar, TutorCard } from '../../../components/features';
import noTutorFound from '../../../assets/img/noTutorFound.png';
import { TutorsGrid, NoResultsMessage } from './Tutors.styled';

const Tutors = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { tutors, isLoading } = useSelector(state => state.tutors);
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
	if (isLoading) {
		return <Loader />;
	}

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
