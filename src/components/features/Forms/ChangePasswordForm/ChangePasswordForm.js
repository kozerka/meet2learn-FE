import { passwordChangeFields } from '../../../../data';
import { Button, FormField } from '../../../ui';
import PropTypes from 'prop-types';
import { useChangePasswordForm } from '../../../../hooks';

const ChangePasswordForm = ({ onSubmit }) => {
	const { values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit } =
		useChangePasswordForm(onSubmit);

	return (
		<form onSubmit={handleSubmit}>
			{passwordChangeFields.map((field, index) => (
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
			<Button $disabled={isSubmitting} $primary $fullWidth type={'submit'}>
				{isSubmitting ? 'Changing password...' : 'Change Password'}
			</Button>
		</form>
	);
};

ChangePasswordForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default ChangePasswordForm;
