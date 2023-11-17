import { Outlet } from 'react-router-dom';
const Home = () => {
	return (
		<>
			<nav></nav>
			<Outlet />
			<footer></footer>
		</>
	);
};

export default Home;
