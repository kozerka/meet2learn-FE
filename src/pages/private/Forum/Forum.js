import styled from 'styled-components';
import { DashboardContainer } from '../../../components/ui/Containers';
import { Outlet } from 'react-router-dom';
import { NavigationMenu, SectionTitle } from '../../../components';
import { forumNavLinks } from '../../../data';
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
