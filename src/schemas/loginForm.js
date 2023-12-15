import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
	email: Yup.string().email('Please enter a valid email').required('User email is required'),
	password: Yup.string().required('Password is required'),
});
