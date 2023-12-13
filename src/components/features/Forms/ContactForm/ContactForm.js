import { Button, CheckboxField, FormField } from '../../../ui';
import { useContactForm } from '../../../../hooks';
import { contactFormFields } from '../../../../data';

const ContactForm = () => {
	const { handleSubmit, errors, values, touched, handleChange, handleBlur, isSubmitting } =
		useContactForm();

	return (
		<form onSubmit={handleSubmit}>
			{contactFormFields.map(field => (
				<FormField
					key={field.name}
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
			<CheckboxField
				label={'I agree to the processing of my data'}
				name={'agreeTerms'}
				errors={errors}
				touched={touched}
				handleChange={handleChange}
			/>
			<Button $disabled={isSubmitting} $primary $fullWidth type={'submit'}>
				{isSubmitting ? 'Submitting...' : 'Submit'}
			</Button>
		</form>
	);
};

export default ContactForm;
