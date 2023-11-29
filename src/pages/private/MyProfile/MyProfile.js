import ExtendedProfileCard from '../../../components/features/User/ExpandedProfileCard';

import { useSelector } from 'react-redux';
const MyProfile = () => {
	const { userData } = useSelector(state => state.user);

	if (!userData) {
		return <div>Loading...</div>;
	}
	return <ExtendedProfileCard user={userData} />;
};

export default MyProfile;
