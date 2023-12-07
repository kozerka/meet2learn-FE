import { Wrapper, Card } from './StatsCards.styled';
import { AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { BsSticky } from 'react-icons/bs';
import { IoChatbubblesOutline, IoSchoolOutline } from 'react-icons/io5';

import { LuHeart, LuHeartOff } from 'react-icons/lu';
import { FaUserClock, FaRegBell } from 'react-icons/fa';

const StatsCards = ({ stats }) => {
	const statsData = [
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

	return (
		<Wrapper>
			{statsData.map((item, index) => (
				<Card key={index}>
					<header>
						<span className={'count'}>{item.count}</span>
						<span className={'icon'}>{item.icon}</span>
					</header>
					<h5 className={'title'}>{item.title}</h5>
				</Card>
			))}
		</Wrapper>
	);
};

StatsCards.propTypes = {
	stats: PropTypes.object.isRequired,
};

export default StatsCards;
