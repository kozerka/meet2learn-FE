import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserStats } from '../../../store/thunks';
import { NavContainer, DashboardContainer, Loader, SectionTitle } from '../../../components/ui';
import { StatsCards, WelcomeMessage } from '../../../components/features';

const Stats = () => {
	const dispatch = useDispatch();
	const { stats, isLoading } = useSelector(state => state.stats);
	const userId = useSelector(state => state.user.userAuth.userInfo?._id);

	useEffect(() => {
		if (userId) {
			dispatch(fetchUserStats(userId));
		}
	}, [dispatch, userId]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<DashboardContainer>
			<NavContainer>
				<WelcomeMessage />
			</NavContainer>
			<SectionTitle title={'User stats'} />
			{stats && <StatsCards stats={stats} />}
		</DashboardContainer>
	);
};

export default Stats;
