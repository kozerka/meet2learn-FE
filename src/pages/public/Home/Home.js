import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../../store/slices/themeSlice';
import Footer from '../../../components/layout/Footer';
const Home = () => {
	const dispatch = useDispatch();
	const handleToggleTheme = () => dispatch(toggleTheme());
	return (
		<>
			<nav>
				<button onClick={handleToggleTheme}>change style</button>
			</nav>
			<Outlet />
			<Footer />
		</>
	);
};

export default Home;
