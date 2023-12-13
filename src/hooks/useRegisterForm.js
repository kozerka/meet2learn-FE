import { useFormik } from 'formik';
import { registerFormSchema } from '../schemas';
import { registerUser } from '../store/thunks';
import { toast } from 'react-toastify';

export const useRegisterForm = (dispatch, navigate) => {
	return useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			role: 'student',
			agreeTerms: false,
		},
		validationSchema: registerFormSchema,
		onSubmit: async (values, { setSubmitting }) => {
			try {
				const actionResponse = await dispatch(registerUser(values));
				if (registerUser.fulfilled.match(actionResponse)) {
					toast.success('Registration successful!');
					navigate('/login');
				} else {
					throw actionResponse;
				}
			} catch (error) {
				const errorMessage = error?.payload?.message || 'Error occurred during registration';
				toast.error(errorMessage);
			} finally {
				setSubmitting(false);
			}
		},
	});
};
