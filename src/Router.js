import { createBrowserRouter } from 'react-router-dom';
import {
	About,
	Contact,
	Home,
	Landing,
	Login,
	NotFound,
	Register,
	Tutors,
	Dashboard,
	Stats,
} from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Landing /> },
			{ path: '/login', element: <Login />, errorElement: <NotFound /> },
			{ path: '/register', element: <Register />, errorElement: <NotFound /> },
			{ path: 'about', element: <About /> },
			{ path: 'tutors', element: <Tutors /> },
			{ path: 'contact', element: <Contact /> },
			{
				path: 'dashboard',
				element: <Dashboard />,
				children: [
					{
						index: true,
						element: <Stats />,
					},
				],
			},
		],
	},
]);

export default router;
