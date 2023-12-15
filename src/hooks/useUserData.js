import { useSelector } from 'react-redux';

export const useUserData = () => {
	const userData = useSelector(state => state.user.userData);
	const isLoading = useSelector(state => state.user.isLoading);

	return { userData, isLoading };
};
