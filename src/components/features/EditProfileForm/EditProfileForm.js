import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import { editFormFieldsData } from '../../../data';
import PropTypes from 'prop-types';
import {
	StyledInput,
	StyledTextArea,
	StyledLabel,
	Form,
	RemoveBtn,
	SmallInput,
} from './EditProfileForm.styled';
import { Button, ErrorText } from '../../ui';
import { FaTrashAlt } from 'react-icons/fa';
import { editProfileFormSchema } from '../../../schemas/editProfileForm';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../store/thunks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfileForm = ({ user }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLoading = useSelector(state => state.user.isLoading);
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
			subjects: user.subjects || [],
			experiences: user.experiences || [],
			bio: user.bio || '',
		}),
	};
	const handleSubmit = async values => {
		try {
			await dispatch(updateUser(values)).unwrap();
			toast.success('Profile updated successfully');
			navigate('..');
		} catch (error) {
			toast.error('Error updating profile: ' + error.message);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={editProfileFormSchema(user)}
			onSubmit={handleSubmit}
		>
			{({ values, errors, touched }) => (
				<Form>
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
									<div>
										<StyledLabel htmlFor={'experiences'}>Teaching Experience:</StyledLabel>
										{values.experiences.map((experience, index) => (
											<div key={index}>
												<Field as={StyledTextArea} name={`experiences[${index}].description`} />
												<ErrorMessage
													name={`experiences[${index}].description`}
													component={ErrorText}
												/>
												<RemoveBtn type={'button'} onClick={() => arrayHelpers.remove(index)}>
													<FaTrashAlt size={'1rem'} /> Remove this experience
												</RemoveBtn>
											</div>
										))}
										<Button
											$small
											type={'button'}
											onClick={() => arrayHelpers.push({ description: '' })}
										>
											+ Add Experience
										</Button>
									</div>
								)}
							/>
						</>
					)}

					<Button $disabled={isLoading} $primary type={'submit'}>
						{isLoading ? 'Submitting...' : 'Submit'}
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
		experiences: PropTypes.arrayOf(PropTypes.string),
		bio: PropTypes.string,
		role: PropTypes.string.isRequired,
	}).isRequired,
	handleSubmit: PropTypes.func,
};

export default EditProfileForm;
