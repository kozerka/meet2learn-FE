// statsConfig.js
import { AiOutlineStar } from 'react-icons/ai';
import { BsSticky } from 'react-icons/bs';
import { IoChatbubblesOutline, IoSchoolOutline } from 'react-icons/io5';
import { LuHeart, LuHeartOff } from 'react-icons/lu';
import { FaUserClock, FaRegBell } from 'react-icons/fa';

export const getStatsData = stats => [
	{ title: 'Number of Posts', count: stats.postsCount, icon: <IoChatbubblesOutline /> },
	{ title: 'Number of Notes', count: stats.notesCount, icon: <BsSticky /> },
	{
		title: 'Number of Learning Connections',
		count: stats.meetingsCount,
		icon: <IoSchoolOutline />,
	},
	{ title: 'Number of Reviews', count: stats.reviewsCount, icon: <AiOutlineStar /> },
	{ title: 'Number of Likes', count: stats.likesCount, icon: <LuHeart /> },
	{ title: 'Number of Dislikes', count: stats.dislikesCount, icon: <LuHeartOff /> },
	{ title: 'Number of given Priorities', count: stats.prioritiesCount, icon: <FaRegBell /> },
	{
		title: 'Account Age (in Days)',
		count: stats.accountAgeInDays,
		icon: <FaUserClock />,
	},
];
