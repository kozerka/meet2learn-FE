import { DashboardContainer } from '../../../components/ui/Containers';
import { Outlet } from 'react-router-dom';
import { NavigationMenu, SectionTitle } from '../../../components';
import { myNotesNavLinks } from '../../../data';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllNotes } from '../../../store/slices/noteSlice';

const NavContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 2rem auto;
	padding: 1rem 2rem;
	border-radius: 1rem;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-evenly;
	background-color: ${({ theme }) => theme.background};
`;

const MyNotes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllNotes());
	}, [dispatch]);
	return (
		<DashboardContainer>
			<NavContainer>
				<SectionTitle title={'My Notes'} />
				<NavigationMenu links={myNotesNavLinks} />
			</NavContainer>
			<Outlet />
		</DashboardContainer>
	);
};

export default MyNotes;
