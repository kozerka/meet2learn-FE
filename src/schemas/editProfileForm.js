import * as Yup from 'yup';

export const editProfileFormSchema = user =>
	Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		firstName: Yup.string().max(80, 'Too Long!').required('First name is required'),
		lastName: Yup.string().max(80, 'Too Long!').required('Last name is required'),
		age: Yup.number().positive('Age must be positive').integer('Age must be an integer'),
		city: Yup.string(),
		country: Yup.string(),
		about: Yup.string().max(500, 'Too Long!'),
		bio: user.role === 'tutor' ? Yup.string().max(500, 'Too Long!') : null,
		subjects:
			user.role === 'tutor'
				? Yup.array().of(
						Yup.object().shape({
							name: Yup.string().required('Subject name is required'),
						})
				  )
				: Yup.array().notRequired(),
		experiences:
			user.role === 'tutor'
				? Yup.array().of(
						Yup.object().shape({
							type: Yup.string(),
							name: Yup.string(),
							period: Yup.string(),
							description: Yup.string(),
						})
				  )
				: Yup.array(),
	});
