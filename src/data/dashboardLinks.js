import { LuLayoutDashboard, LuUser, LuStickyNote } from 'react-icons/lu';
import { IoSchoolOutline, IoChatboxEllipsesOutline } from 'react-icons/io5';

export const dashboardLinks = [
	{ name: 'Dashboard', icon: <LuLayoutDashboard size={'1.5rem'} />, path: '/dashboard' },
	{ name: 'Profile', icon: <LuUser size={'1.5rem'} />, path: 'profile' },
	{ name: 'Tutoring', icon: <IoSchoolOutline size={'1.5rem'} />, path: 'my-tutoring' },
	{ name: 'My notes', icon: <LuStickyNote size={'1.5rem'} />, path: 'my-notes' },
	{ name: 'Forum', icon: <IoChatboxEllipsesOutline size={'1.5rem'} />, path: 'forum' },
];
