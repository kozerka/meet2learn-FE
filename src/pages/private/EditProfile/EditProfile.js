import { EditProfileForm } from '../../../components/features/Forms';
import { useUserData } from '../../../hooks';
import { Loader, SectionTitle } from '../../../components/ui';
import { Wrapper } from './EditProfile.styled';
const EditProfile = () => {
	const { userData, isLoading } = useUserData();

	if (isLoading) {
		return <Loader />;
	}

	return (
		<Wrapper>
			<SectionTitle title={'Edit Profile'} />
			<EditProfileForm user={userData} />
		</Wrapper>
	);
};

export default EditProfile;
