import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../../store/slices/themeSlice';
const Home = () => {
	const dispatch = useDispatch();
	const handleToggleTheme = () => dispatch(toggleTheme());
	return (
		<>
			<nav>
				<button onClick={handleToggleTheme}>change style</button>
			</nav>
			<Outlet />
			<footer></footer>
		</>
	);
};

export default Home;
