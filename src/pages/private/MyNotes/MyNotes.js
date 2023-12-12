import {
	DashboardContainer,
	NavigationMenu,
	SectionTitle,
	NavContainer,
} from '../../../components/ui';
import { Outlet } from 'react-router-dom';
import { myNotesNavLinks } from '../../../data';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllNotes } from '../../../store/thunks';

const MyNotes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllNotes({ page: 1, limit: 6 }));
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
