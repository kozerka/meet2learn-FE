import ExtendedProfileCard from '../../../components/features/UserCards/ExpandedProfileCard';

import { useSelector } from 'react-redux';
import { Loader } from '../../../components/ui';
const MyProfile = () => {
	const { userData } = useSelector(state => state.user);

	if (!userData) {
		return <Loader />;
	}
	return <ExtendedProfileCard user={userData} />;
};

export default MyProfile;
