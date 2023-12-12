import { FiMail } from 'react-icons/fi';
import { Button, FormField } from '../../ui';
import PropTypes from 'prop-types';
import { useResetPasswordForm } from '../../../hooks';

const ResetPasswordForm = ({ dispatch, setEmailSent }) => {
	const { values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit } =
		useResetPasswordForm(dispatch, setEmailSent);

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
			<Button $disabled={isSubmitting} $primary $fullWidth type={'submit'}>
				{isSubmitting ? 'Sending...' : 'Send Reset Link'}
			</Button>
		</form>
	);
};

ResetPasswordForm.propTypes = {
	dispatch: PropTypes.func.isRequired,
	setEmailSent: PropTypes.func.isRequired,
};

export default ResetPasswordForm;
