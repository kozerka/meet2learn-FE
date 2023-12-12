import {
	DashboardContainer,
	NavigationMenu,
	SectionTitle,
	NavContainer,
} from '../../../components/ui';
import { Outlet } from 'react-router-dom';
import { forumNavLinks } from '../../../data';

const Forum = () => {
	return (
		<DashboardContainer>
			<NavContainer>
				<SectionTitle title={'Forum'} />
				<NavigationMenu links={forumNavLinks} />
			</NavContainer>
			<Outlet />
		</DashboardContainer>
	);
};

export default Forum;
