import * as Yup from 'yup';

export const emailCheckForResetSchema = Yup.object().shape({
	email: Yup.string().email('Please enter a valid email').required('User email is required'),
});
