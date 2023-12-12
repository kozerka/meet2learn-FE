import { Outlet } from 'react-router-dom';

import Footer from '../../../components/layout/Footer';
import Navbar from '../../../components/layout/Navbar/Navbar';

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
