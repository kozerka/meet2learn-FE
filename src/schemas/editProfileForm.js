import * as Yup from 'yup';

export const editProfileFormSchema = user =>
	Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		firstName: Yup.string()
			.matches(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ -]+$/, 'Invalid characters')
			.max(80, 'Too Long!')
			.required('First name is required'),
		lastName: Yup.string()
			.matches(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ -]+$/, 'Invalid characters')
			.max(80, 'Too Long!')
			.required('Last name is required'),
		age: Yup.number().positive('Age must be positive').integer('Age must be an integer'),
		city: Yup.string()
			.matches(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ -]+$/, 'Invalid characters')
			.required('City is required'),
		country: Yup.string()
			.matches(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ -]+$/, 'Invalid characters')
			.required('Country is required'),
		about: Yup.string().max(500, 'Too Long!'),
		bio: user.role === 'tutor' ? Yup.string().max(500, 'Too Long!') : null,
		subjects:
			user.role === 'tutor'
				? Yup.array().of(
						Yup.object().shape({
							name: Yup.string().required('Field is required - if empty just delete the line'),
						})
				  )
				: Yup.array().notRequired(),
		experiences:
			user.role === 'tutor'
				? Yup.array().of(
						Yup.object().shape({
							description: Yup.string().required(
								'Field is required - if empty just delete the line'
							),
						})
				  )
				: Yup.array().notRequired(),
	});
