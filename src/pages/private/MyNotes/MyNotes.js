import { DashboardContainer } from '../../../components/ui/Containers';
import { Outlet, Link } from 'react-router-dom';
const MyNotes = () => {
	return (
		<DashboardContainer>
			<nav>
				<Link to={''}>All Notes</Link>
				<Link to={'add'}>Add Note</Link>
			</nav>
			<Outlet />
		</DashboardContainer>
	);
};

export default MyNotes;
