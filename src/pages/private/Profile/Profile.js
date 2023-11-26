import { Outlet } from 'react-router-dom';
import { dummyUser } from '../../../data/dummyUser';
import { DashboardContainer } from '../../../components/ui/Containers';
import BasicProfileCard from '../../../components/features/User/BasicProfileCard';
import { RiUserSettingsLine, RiEditLine, RiUserSearchLine } from 'react-icons/ri';
import { Greetings, ProfileContainer, Navigation, StyledLink } from './Profile.styled';

const Profile = () => {
	return (
		<DashboardContainer>
			<Greetings>
				<h1>Hello, {dummyUser.name}!</h1>
			</Greetings>
			<ProfileContainer>
				<BasicProfileCard user={dummyUser} />
				<Navigation>
					<StyledLink to={''}>
						<RiUserSearchLine size={'1.5em'} style={{ marginRight: '0.5rem' }} />
						My Profile
					</StyledLink>
					<StyledLink to={'edit'}>
						<RiEditLine size={'1.5em'} style={{ marginRight: '0.5rem' }} />
						Edit Profile
					</StyledLink>
					<StyledLink to={'settings'}>
						<RiUserSettingsLine size={'1.5em'} style={{ marginRight: '0.5rem' }} />
						Settings
					</StyledLink>
				</Navigation>
			</ProfileContainer>

			<Outlet />
		</DashboardContainer>
	);
};

export default Profile;
