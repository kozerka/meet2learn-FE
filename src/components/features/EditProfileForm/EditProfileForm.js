import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import { editFormFieldsData } from '../../../data';
import PropTypes from 'prop-types';
import {
	StyledInput,
	StyledTextArea,
	StyledLabel,
	Form,
	RemoveBtn,
	ErrorText,
	SmallInput,
} from './EditProfileForm.styled';
import Button from '../../ui/Button';
import { FaTrashAlt } from 'react-icons/fa';
import { editProfileFormSchema } from '../../../schemas/editProfileForm';

// TODO refactor
// FIXME walidacja do testow po połączeniu z api

const FileInput = ({ field, form }) => {
	const handleChange = e => {
		const file = e.target.files[0];
		form.setFieldValue(field.name, file);
	};

	return <input type={'file'} name={field.name} onChange={handleChange} />;
};

const EditProfileForm = ({ user }) => {
	const isTutor = user.role === 'tutor';

	const initialValues = {
		name: user.name,
		email: user.email,
		role: user.role,
		firstName: user.firstName || '',
		lastName: user.lastName || '',
		age: user.age || '',
		avatar: user.avatar,
		city: user.city || 'Somewhere on Earth',
		country: user.country || 'Earth',
		about: user.about || '',
		...(isTutor && {
			subjects: user.subjects.map(subject => ({ name: subject })),
			experiences: user.experiences || [],
			bio: user.bio || '',
		}),
	};

	const handleSubmit = values => {
		console.log(values);
		// TODO API
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={editProfileFormSchema(user)}
			onSubmit={handleSubmit}
		>
			{({ values, errors, touched }) => (
				<Form>
					<div style={{ margin: '2rem 0' }}>
						<StyledLabel htmlFor={'avatar'}>Avatar:</StyledLabel>
						<Field name={'avatar'} component={FileInput} />
					</div>
					{editFormFieldsData.map(field => (
						<div key={field.name}>
							<StyledLabel htmlFor={field.name}>{field.label}</StyledLabel>
							<Field
								name={field.name}
								type={field.type}
								as={field.type === 'textarea' ? StyledTextArea : StyledInput}
								$hasError={touched[field.name] && errors[field.name]}
							/>
							<ErrorMessage name={field.name} component={ErrorText} />
						</div>
					))}

					{user.role === 'tutor' && (
						<>
							<div>
								<StyledLabel htmlFor={'bio'}>Bio:</StyledLabel>
								<Field name={'bio'} as={StyledTextArea} $hasError={touched.bio && errors.bio} />
								<ErrorMessage name={'bio'} component={ErrorText} />
							</div>
							<FieldArray
								name={'subjects'}
								render={arrayHelpers => (
									<div>
										<StyledLabel htmlFor={'subjects'}>Subjects:</StyledLabel>
										{values.subjects.map((subject, index) => (
											<div
												key={index}
												style={{
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
													gap: '2rem',
												}}
											>
												<Field name={`subjects[${index}].name`} as={SmallInput} />
												<ErrorMessage name={`subjects[${index}].name`} component={ErrorText} />
												<RemoveBtn type={'button'} onClick={() => arrayHelpers.remove(index)}>
													<FaTrashAlt size={'1rem'} />
												</RemoveBtn>
											</div>
										))}
										<Button $small type={'button'} onClick={() => arrayHelpers.push({ name: '' })}>
											+ Add Subject
										</Button>
									</div>
								)}
							/>

							<FieldArray
								name={'experiences'}
								render={arrayHelpers => (
									<div style={{ marginBottom: '2rem' }}>
										<StyledLabel htmlFor={'experiences'}>Teaching experience:</StyledLabel>
										{values.experiences.map((experience, index) => (
											<div key={index}>
												<div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
													<Field name={`experiences[${index}].type`} as={SmallInput} />
													<ErrorMessage name={`experiences[${index}].type`} component={ErrorText} />
													<Field name={`experiences[${index}].name`} as={SmallInput} />
													<ErrorMessage name={`experiences[${index}].type`} component={ErrorText} />
													<Field name={`experiences[${index}].period`} as={SmallInput} />
													<ErrorMessage name={`experiences[${index}].type`} component={ErrorText} />
													<Field name={`experiences[${index}].description`} as={SmallInput} />
													<ErrorMessage name={`experiences[${index}].type`} component={ErrorText} />
												</div>
												<RemoveBtn type={'button'} onClick={() => arrayHelpers.remove(index)}>
													<FaTrashAlt size={'1rem'} /> Remove this position
												</RemoveBtn>
											</div>
										))}
										<Button
											$small
											type={'button'}
											onClick={() =>
												arrayHelpers.push({ type: '', name: '', period: '', description: '' })
											}
										>
											+ Add Experience
										</Button>
									</div>
								)}
							/>
						</>
					)}

					<Button $primary type={'submit'}>
						Submit
					</Button>
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
		subjects: PropTypes.arrayOf(PropTypes.string),
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
