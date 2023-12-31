import { FiLock } from 'react-icons/fi';
import { Button, FormField } from '../../../ui';
import PropTypes from 'prop-types';
import { useChangePasswordAfterReset } from '../../../../hooks';

const ChangePasswordAfterResetForm = ({ dispatch }) => {
	const { handleSubmit, errors, values, touched, handleChange, handleBlur, isSubmitting } =
		useChangePasswordAfterReset(dispatch);

	return (
		<form onSubmit={handleSubmit}>
			<FormField
				label={'New Password'}
				type={'password'}
				name={'newPassword'}
				errors={errors}
				values={values}
				touched={touched}
				handleChange={handleChange}
				handleBlur={handleBlur}
				icon={<FiLock />}
			/>
			<FormField
				label={'Confirm New Password'}
				type={'password'}
				name={'confirmPassword'}
				errors={errors}
				values={values}
				touched={touched}
				handleChange={handleChange}
				handleBlur={handleBlur}
				icon={<FiLock />}
			/>
			<Button $disabled={isSubmitting} $primary $fullWidth type={'submit'}>
				{isSubmitting ? 'Resetting...' : 'Reset Password'}
			</Button>
		</form>
	);
};

ChangePasswordAfterResetForm.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

export default ChangePasswordAfterResetForm;
