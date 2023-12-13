import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { changePassword } from '../store/thunks';

export const useChangePassword = () => {
	const dispatch = useDispatch();

	return async (values, resetForm) => {
		try {
			const resultAction = await dispatch(
				changePassword({
					currentPassword: values.currentPassword,
					newPassword: values.newPassword,
					confirmPassword: values.confirmPassword,
				})
			);
			if (changePassword.fulfilled.match(resultAction)) {
				toast.success('Password changed successfully');
				resetForm();
			} else {
				throw resultAction;
			}
		} catch (error) {
			const errorMessage = error?.payload?.message || 'Error occurred during password reset';
			toast.error(errorMessage);
		}
	};
};
