import { useFormik } from 'formik';
import { passwordChangeSchema } from '../schemas';

export const useChangePasswordForm = onSubmit => {
	return useFormik({
		initialValues: {
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
		validationSchema: passwordChangeSchema,
		onSubmit,
	});
};
