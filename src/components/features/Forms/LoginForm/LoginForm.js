import PropTypes from 'prop-types';
import { Button, FormField } from '../../../ui';
import { FiMail, FiLock } from 'react-icons/fi';
import { useLoginForm } from '../../../../hooks';

const LoginForm = ({ dispatch, navigate }) => {
	const { values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit } =
		useLoginForm(dispatch, navigate);

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
