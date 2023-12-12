import { Wrapper, Card } from './StatsCards.styled';
import PropTypes from 'prop-types';
import { getStatsData } from '../../../data';

const StatsCards = ({ stats }) => {
	const statsData = getStatsData(stats);

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
