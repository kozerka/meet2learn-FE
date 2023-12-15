import { Outlet } from 'react-router-dom';
import {
	NavigationMenu,
	SectionTitle,
	DashboardContainer,
	NavContainer,
} from '../../../components/ui';
import { tutoringNavLinks } from '../../../data';

const Tutoring = () => {
	return (
		<DashboardContainer>
			<NavContainer>
				<SectionTitle title={'Tutoring'} />
				<NavigationMenu links={tutoringNavLinks} />
			</NavContainer>
			<Outlet />
		</DashboardContainer>
	);
};

export default Tutoring;
