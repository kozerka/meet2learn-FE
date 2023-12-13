import { Outlet } from 'react-router-dom';
import { DashboardContainer, Loader, NavigationMenu } from '../../../components/ui';
import BasicProfileCard from '../../../components/features/UserCards/BasicProfileCard';
import { Greetings, ProfileContainer } from './Profile.styled';
import { profileNavLinks } from '../../../data';
import { useSelector } from 'react-redux';

const Profile = () => {
	const { userData } = useSelector(state => state.user);
	if (!userData) {
		return <Loader />;
	}
	return (
		<DashboardContainer>
			<Greetings>
				<h1>Hello, {userData.name}!</h1>
			</Greetings>
			<ProfileContainer>
				<BasicProfileCard user={userData} />
				<NavigationMenu links={profileNavLinks} />
			</ProfileContainer>

			<Outlet />
		</DashboardContainer>
	);
};

export default Profile;
