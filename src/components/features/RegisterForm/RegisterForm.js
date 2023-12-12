// RegisterForm.js
import { useFormik } from 'formik';
import { registerFormSchema } from '../../../schemas';
import { registerFormFields } from '../../../data';
import { registerUser } from '../../../store/thunks';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { SelectContainer, Button, FormField, CheckboxField } from '../../ui';

const RegisterForm = ({ dispatch, navigate }) => {
	const { values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit } =
		useFormik({
			initialValues: {
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
				role: 'student',
				agreeTerms: false,
			},
			validationSchema: registerFormSchema,
			onSubmit: async (values, { setSubmitting }) => {
				try {
					const actionResponse = await dispatch(registerUser(values));
					if (registerUser.fulfilled.match(actionResponse)) {
						toast.success('Registration successful!');
						navigate('/login');
					} else {
						throw actionResponse;
					}
				} catch (error) {
					const errorMessage = error?.payload?.message || 'Error occurred during registration';
					toast.error(errorMessage);
				} finally {
					setSubmitting(false);
				}
			},
		});

	return (
		<form onSubmit={handleSubmit}>
			{registerFormFields.map((field, index) => (
				<FormField
					key={index}
					label={field.label}
					type={field.type}
					name={field.name}
					errors={errors}
					values={values}
					touched={touched}
					handleChange={handleChange}
					handleBlur={handleBlur}
					icon={field.icon}
				/>
			))}

			<SelectContainer>
				<label htmlFor={'role'}>Role:</label>
				<select name={'role'} onChange={handleChange} onBlur={handleBlur} value={values.role}>
					<option value={'student'}>Student</option>
					<option value={'tutor'}>Tutor</option>
				</select>
			</SelectContainer>

			<CheckboxField
				label={
					'I agree to the processing of my personal data for registration and creating an account on meet2learn.'
				}
				name={'agreeTerms'}
				errors={errors}
				touched={touched}
				handleChange={handleChange}
			/>
			<Button $disabled={isSubmitting} $primary $fullWidth type={'submit'}>
				{isSubmitting ? 'Registering...' : 'Register'}
			</Button>
		</form>
	);
};

RegisterForm.propTypes = {
	dispatch: PropTypes.func.isRequired,
	navigate: PropTypes.func.isRequired,
};

export default RegisterForm;
