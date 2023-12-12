import { Formik, Field, ErrorMessage } from 'formik';
import { editFormFieldsData } from '../../../../data';
import PropTypes from 'prop-types';
import { StyledInput, StyledTextArea, StyledLabel, Form } from './EditProfileForm.styled';
import { Button, ErrorText } from '../../../ui';
import { editProfileFormSchema } from '../../../../schemas/editProfileForm';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../../store/thunks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SubjectsFieldArray } from './SubjectFieldArray';
import { ExperiencesFieldArray } from './ExperiencesFieldArray';

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
			{formik => (
				<Form onSubmit={formik.handleSubmit}>
					{editFormFieldsData.map(field => (
						<div key={field.name}>
							<StyledLabel htmlFor={field.name}>{field.label}</StyledLabel>
							<Field
								name={field.name}
								type={field.type}
								as={field.type === 'textarea' ? StyledTextArea : StyledInput}
								$hasError={formik.touched[field.name] && formik.errors[field.name]}
							/>
							<ErrorMessage name={field.name} component={ErrorText} />
						</div>
					))}

					{user.role === 'tutor' && (
						<>
							<div>
								<StyledLabel htmlFor={'bio'}>Bio:</StyledLabel>
								<Field
									name={'bio'}
									as={StyledTextArea}
									$hasError={formik.touched.bio && formik.errors.bio}
								/>
								<ErrorMessage name={'bio'} component={ErrorText} />
							</div>

							<SubjectsFieldArray formik={formik} />
							<ExperiencesFieldArray formik={formik} />
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
		subjects: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		),
		experiences: PropTypes.arrayOf(
			PropTypes.shape({
				description: PropTypes.string.isRequired,
			})
		),
		bio: PropTypes.string,
		role: PropTypes.string.isRequired,
	}).isRequired,
	handleSubmit: PropTypes.func,
};

export default EditProfileForm;
