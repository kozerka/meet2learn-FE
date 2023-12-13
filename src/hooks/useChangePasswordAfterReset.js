import { useFormik } from 'formik';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { resetPasswordFinalize } from '../store/thunks';
import { passwordResetSchema } from '../schemas';
import { toast } from 'react-toastify';

export const useChangePasswordAfterReset = dispatch => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	return useFormik({
		initialValues: {
			newPassword: '',
			confirmPassword: '',
		},
		validationSchema: passwordResetSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			const token = searchParams.get('token');
			if (!token) return;

			try {
				const actionResponse = await dispatch(
					resetPasswordFinalize({ token, newPassword: values.newPassword })
				);
				if (resetPasswordFinalize.fulfilled.match(actionResponse)) {
					toast.success('Password reset successfully!');
					resetForm();
					navigate('/login');
				} else {
					throw actionResponse;
				}
			} catch (error) {
				const errorMessage = error?.payload?.message || 'Error occurred during password reset';
				toast.error(errorMessage);
				navigate('/reset-password');
			} finally {
				setSubmitting(false);
			}
		},
	});
};
