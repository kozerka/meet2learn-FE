import { Outlet } from 'react-router-dom';
import { DashboardContainer } from '../../../components/ui/Containers';
import BasicProfileCard from '../../../components/features/User/BasicProfileCard';
import { Greetings, ProfileContainer } from './Profile.styled';
import { NavigationMenu } from '../../../components';
import { profileNavLinks } from '../../../data';
import { useSelector } from 'react-redux';

const Profile = () => {
	const { userData } = useSelector(state => state.user);
	if (!userData) {
		return <div>Loading...</div>;
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
