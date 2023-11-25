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
	Forum,
	MyNotes,
	Tutoring,
	Profile,
	TutorProfile,
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
			{
				path: 'tutors',
				element: <Tutors />,
			},
			{ path: 'tutors/:id', element: <TutorProfile /> },
			{ path: 'contact', element: <Contact /> },
			{
				path: 'dashboard',
				element: <Dashboard />,
				children: [
					{
						index: true,
						element: <Stats />,
					},
					{ path: 'forum', element: <Forum /> },
					{ path: 'my-notes', element: <MyNotes /> },
					{ path: 'my-tutoring', element: <Tutoring /> },
					{ path: 'profile', element: <Profile /> },
				],
			},
		],
	},
]);

export default router;
