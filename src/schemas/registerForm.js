import * as Yup from 'yup';

export const registerFormSchema = Yup.object().shape({
	name: Yup.string()
		.min(5, 'Name must be at least 5 characters long')
		.matches(/^[A-Za-z0-9]+$/, 'Name can not contain special characters or spaces')
		.required('Name is required'),
	email: Yup.string().email('Invalid email format').required('Email is required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'Password must include one lowercase letter, one uppercase letter, one number, and one special character'
		)
		.required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirm password is required'),
	role: Yup.string().required('Role is required'),
	agreeTerms: Yup.boolean()
		.oneOf([true], 'You must agree to the terms and conditions to register')
		.required('Agreement to terms and conditions is required'),
});
