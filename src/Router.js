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
	TutorPublicProfile,
	Settings,
	EditProfile,
	MyProfile,
	EditNote,
	AllNotes,
	AddNote,
	ViewNote,
	SingleTutorConnection,
	AllTutorConnections,
	UploadAvatar,
	AllPosts,
	EditPost,
	MyPosts,
	AddPost,
} from './pages';
import ProtectedRoute from './components/ProtectedRoute';

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
			{ path: 'page/:pageNumber/:search?', element: <Tutors /> },
			{ path: 'tutors/:id', element: <TutorPublicProfile /> },
			{ path: 'contact', element: <Contact /> },
			{
				path: 'dashboard',
				element: (
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				),
				children: [
					{
						index: true,
						element: <Stats />,
					},
					{
						path: 'forum',
						element: <Forum />,
						children: [
							{ index: true, element: <AllPosts /> },
							{ path: 'add-post', element: <AddPost /> },
							{
								path: 'edit-post/:id',
								element: <EditPost />,
							},
							{
								path: 'my-posts',
								element: <MyPosts />,
							},
						],
					},
					{
						path: 'my-notes',
						element: <MyNotes />,
						children: [
							{ index: true, element: <AllNotes /> },
							{ path: 'page/:pageNumber/:tag?', element: <AllNotes /> },
							{ path: 'add', element: <AddNote /> },
							{
								path: ':id/edit',
								element: <EditNote />,
							},
							{
								path: ':id',
								element: <ViewNote />,
							},
						],
					},
					{
						path: 'tutoring',
						element: <Tutoring />,
						children: [
							{ index: true, element: <AllTutorConnections /> },
							{ path: ':id', element: <SingleTutorConnection /> },
						],
					},
					{
						path: 'profile',
						element: <Profile />,
						children: [
							{ index: true, element: <MyProfile /> },
							{ path: 'edit', element: <EditProfile /> },
							{ path: 'settings', element: <Settings /> },
							{ path: 'upload-avatar', element: <UploadAvatar /> },
						],
					},
				],
			},
		],
	},
]);

export default router;
