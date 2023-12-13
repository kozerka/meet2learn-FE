import { useFormik } from 'formik';
import { loginUser, fetchUser } from '../store/thunks';
import { toast } from 'react-toastify';
import { loginFormSchema } from '../schemas';

export const useLoginForm = (dispatch, navigate) => {
	return useFormik({
		initialValues: { email: '', password: '' },
		validationSchema: loginFormSchema,
		onSubmit: async (values, { setSubmitting }) => {
			try {
				const actionResponse = await dispatch(loginUser(values));
				if (loginUser.fulfilled.match(actionResponse)) {
					dispatch(fetchUser());
					toast.success('Login successful!');
					navigate('/dashboard');
				} else {
					throw actionResponse;
				}
			} catch (error) {
				const errorMessage = error?.payload?.message || 'Error occurred during login';
				toast.error(errorMessage);
			} finally {
				setSubmitting(false);
			}
		},
	});
};
