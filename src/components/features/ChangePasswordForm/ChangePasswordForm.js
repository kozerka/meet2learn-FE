import { useFormik } from 'formik';
import { passwordChangeSchema } from '../../../schemas';
import { passwordChangeFields } from '../../../data';
import FormField from '../../../components/features/Form/FormField';
import Button from '../../../components/ui/Button';
import PropTypes from 'prop-types';

const ChangePasswordForm = ({ onSubmit }) => {
	const { values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit } =
		useFormik({
			initialValues: {
				currentPassword: '',
				newPassword: '',
				confirmPassword: '',
			},
			validationSchema: passwordChangeSchema,
			onSubmit,
		});

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
