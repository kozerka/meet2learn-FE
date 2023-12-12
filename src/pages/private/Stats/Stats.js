import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserStats } from '../../../store/thunks';
import { NavContainer, DashboardContainer } from '../../../components/ui/Containers';
import { StatsCards, WelcomeMessage, SectionTitle } from '../../../components';
import Loader from '../../../components/ui/Loader/Loader';
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
