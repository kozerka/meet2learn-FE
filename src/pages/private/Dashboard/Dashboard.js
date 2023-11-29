import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import { Container, DashContainer } from './Dashboard.styled';

const Dashboard = () => {
	return (
		<Container>
			<DashContainer>
				<Sidebar />
				<Outlet />
			</DashContainer>
		</Container>
	);
};

export default Dashboard;
