import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import FormField from '../Form/FormField';
import Button from '../../ui/Button';
import { FiMail, FiLock } from 'react-icons/fi';
import { loginFormSchema } from '../../../schemas';
import { loginUser, fetchUser } from '../../../store/thunks';
import { toast } from 'react-toastify';

const LoginForm = ({ dispatch, navigate }) => {
	const { values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit } =
		useFormik({
			initialValues: { email: '', password: '' },
			validationSchema: loginFormSchema,
			onSubmit: async (values, { setSubmitting }) => {
				try {
					const actionResponse = await dispatch(loginUser(values));
					if (loginUser.fulfilled.match(actionResponse)) {
						dispatch(fetchUser());
						toast.success('Login successful!');
						navigate('/dashboard');
					} else {
						throw actionResponse;
					}
				} catch (error) {
					const errorMessage = error?.payload?.message || 'Error occurred during login';
					toast.error(errorMessage);
				} finally {
					setSubmitting(false);
				}
			},
		});

	return (
		<form onSubmit={handleSubmit}>
			<FormField
				label={'Email'}
				type={'email'}
				name={'email'}
				errors={errors}
				values={values}
				touched={touched}
				handleChange={handleChange}
				handleBlur={handleBlur}
				icon={<FiMail />}
			/>
			<FormField
				label={'Password'}
				type={'password'}
				name={'password'}
				errors={errors}
				values={values}
				touched={touched}
				handleChange={handleChange}
				handleBlur={handleBlur}
				icon={<FiLock />}
			/>

			<Button $disabled={isSubmitting} $primary $fullWidth type={'submit'}>
				{isSubmitting ? 'Logging in...' : 'Login'}
			</Button>
		</form>
	);
};

LoginForm.propTypes = {
	dispatch: PropTypes.func.isRequired,
	navigate: PropTypes.func.isRequired,
};

export default LoginForm;
