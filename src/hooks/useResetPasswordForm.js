import { useFormik } from 'formik';
import { emailCheckForResetSchema } from '../schemas';
import { resetPasswordInitiate } from '../store/thunks';
import { toast } from 'react-toastify';

export const useResetPasswordForm = (dispatch, setEmailSent) => {
	return useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: emailCheckForResetSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			try {
				const actionResponse = await dispatch(resetPasswordInitiate(values.email));
				if (resetPasswordInitiate.fulfilled.match(actionResponse)) {
					setEmailSent(true);
					resetForm();
					toast.success('Password reset request has been sent');
				} else {
					throw actionResponse;
				}
			} catch (error) {
				const errorMessage = error?.payload?.message || 'Error occurred during password reset';
				toast.error(errorMessage);
			} finally {
				setSubmitting(false);
			}
		},
	});
};
