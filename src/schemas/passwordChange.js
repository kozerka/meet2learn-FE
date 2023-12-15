import * as Yup from 'yup';

export const passwordChangeSchema = Yup.object().shape({
	currentPassword: Yup.string().required('Current password is required'),
	newPassword: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'Password must include one lowercase letter, one uppercase letter, one number, and one special character'
		)
		.required('New password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
		.required('Confirm password is required'),
});
