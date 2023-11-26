import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const FileInput = ({ field, form }) => {
	const handleChange = e => {
		const file = e.target.files[0];
		form.setFieldValue(field.name, file);
	};

	return <input type={'file'} name={field.name} onChange={handleChange} />;
};

const EditProfileForm = ({ user }) => {
	const isTutor = user.role === 'tutor';

	const formFields = [
		{ name: 'name', type: 'text', label: 'Name' },
		{ name: 'email', type: 'email', label: 'Email' },
		{ name: 'firstName', type: 'text', label: 'First Name' },
		{ name: 'lastName', type: 'text', label: 'Last Name' },
		{ name: 'age', type: 'number', label: 'Age' },
		{ name: 'city', type: 'text', label: 'City' },
		{ name: 'country', type: 'text', label: 'Country' },
		{ name: 'about', type: 'textarea', label: 'About' },
	];

	const initialValues = {
		name: user.name,
		email: user.email,
		firstName: user.firstName || '',
		lastName: user.lastName || '',
		age: user.age || '',
		avatar: user.avatar,
		city: user.city || 'Somewhere on Earth',
		country: user.country || 'Earth',
		about: user.about || '',
		...(isTutor && {
			subjects: user.subjects.map(subject => ({ name: subject })) || [],
			experiences: user.experiences || [],
			bio: user.bio || '',
		}),
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		firstName: Yup.string().max(80, 'Too Long!'),
		lastName: Yup.string().max(80, 'Too Long!'),
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
				: null,
		experiences:
			user.role === 'tutor'
				? Yup.array().of(
						Yup.object().shape({
							type: Yup.string().required('Type is required'),
							name: Yup.string().required('Institution name is required'),
							period: Yup.string().required('Period is required'),
							description: Yup.string().required('Description is required'),
						})
				  )
				: null,
	});

	const handleSubmit = values => {
		console.log(values);
		// API
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ values, errors, touched }) => (
				<Form>
					<label htmlFor={'avatar'}>Avatar:</label>
					<Field name={'avatar'} component={FileInput} />
					{formFields.map(field => (
						<div key={field.name}>
							<label htmlFor={field.name}>{field.label}</label>
							<Field
								name={field.name}
								type={field.type}
								as={field.type === 'textarea' ? 'textarea' : undefined}
							/>
							{field.type !== 'file' && <ErrorMessage name={field.name} component={'div'} />}
						</div>
					))}

					{user.role === 'tutor' && (
						<>
							<Field name={'bio'} as={'textarea'} />
							<FieldArray
								name={'subjects'}
								render={arrayHelpers => (
									<div>
										{values.subjects.map((subject, index) => (
											<div key={index}>
												<Field name={`subjects[${index}].name`} />
												<button type={'button'} onClick={() => arrayHelpers.remove(index)}>
													Remove
												</button>
											</div>
										))}
										<button type={'button'} onClick={() => arrayHelpers.push({ name: '' })}>
											Add Subject
										</button>
									</div>
								)}
							/>

							<FieldArray
								name={'experiences'}
								render={arrayHelpers => (
									<div>
										{values.experiences.map((experience, index) => (
											<div key={index}>
												<Field name={`experiences[${index}].type`} />
												<Field name={`experiences[${index}].name`} />
												<Field name={`experiences[${index}].period`} />
												<Field name={`experiences[${index}].description`} />
												<button type={'button'} onClick={() => arrayHelpers.remove(index)}>
													Remove
												</button>
											</div>
										))}
										<button
											type={'button'}
											onClick={() =>
												arrayHelpers.push({ type: '', name: '', period: '', description: '' })
											}
										>
											Add Experience
										</button>
									</div>
								)}
							/>
						</>
					)}

					<button type={'submit'}>Submit</button>
				</Form>
			)}
		</Formik>
	);
};

EditProfileForm.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		age: PropTypes.number,
		avatar: PropTypes.string,
		city: PropTypes.string,
		country: PropTypes.string,
		about: PropTypes.string,
		subjects: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		),
		experiences: PropTypes.arrayOf(
			PropTypes.shape({
				type: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				period: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
			})
		),
		bio: PropTypes.string,
		role: PropTypes.string.isRequired,
	}).isRequired,
};

FileInput.propTypes = {
	field: PropTypes.shape({
		name: PropTypes.string.isRequired,
	}).isRequired,
	form: PropTypes.shape({
		setFieldValue: PropTypes.func.isRequired,
	}).isRequired,
};

export default EditProfileForm;
