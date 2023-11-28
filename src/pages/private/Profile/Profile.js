import { Outlet } from 'react-router-dom';
import { dummyUser } from '../../../data/dummyUser';
import { DashboardContainer } from '../../../components/ui/Containers';
import BasicProfileCard from '../../../components/features/User/BasicProfileCard';
import { Greetings, ProfileContainer } from './Profile.styled';
import { NavigationMenu } from '../../../components';
import { profileNavLinks } from '../../../data';

const Profile = () => {
	return (
		<DashboardContainer>
			<Greetings>
				<h1>Hello, {dummyUser.name}!</h1>
			</Greetings>
			<ProfileContainer>
				<BasicProfileCard user={dummyUser} />
				<NavigationMenu links={profileNavLinks} />
			</ProfileContainer>

			<Outlet />
		</DashboardContainer>
	);
};

export default Profile;
