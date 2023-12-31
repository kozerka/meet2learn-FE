import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../../components/layout';
import { Container, DashContainer } from './Dashboard.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../../../store/thunks';
const Dashboard = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);
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
