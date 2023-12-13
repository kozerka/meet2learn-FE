import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteUser } from '../store/thunks';
import { useNavigate } from 'react-router-dom';

export const useDeleteAccount = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDeleteAccount = async () => {
		try {
			await dispatch(deleteUser());
			toast.success('Account deleted successfully');
			navigate('/');
		} catch (error) {
			toast.error(error.message || 'Error deleting account');
		}
	};

	return handleDeleteAccount;
};
