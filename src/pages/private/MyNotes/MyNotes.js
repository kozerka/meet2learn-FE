import { DashboardContainer } from '../../../components/ui/Containers';
import { Outlet } from 'react-router-dom';
import { NavigationMenu } from '../../../components';
import { myNotesNavLinks } from '../../../data';
const MyNotes = () => {
	return (
		<DashboardContainer>
			<NavigationMenu links={myNotesNavLinks} />
			<Outlet />
		</DashboardContainer>
	);
};

export default MyNotes;
