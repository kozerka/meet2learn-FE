import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../../../components/layout';

const Home = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Home;
