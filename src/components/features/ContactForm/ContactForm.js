import { useFormik } from 'formik';
import FormField from '../../../components/features/Form/FormField';
import CheckboxField from '../../../components/features/Form/CheckboxField';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { resetFormData } from '../../../store/slices/contactFormSlice';
import { sendContactForm } from '../../../store/thunks';
import Button from '../../../components/ui/Button';
import { contactFormSchema } from '../../../schemas';
import { contactFormFields } from '../../../data';

const ContactForm = () => {
	const dispatch = useDispatch();
	const { formData } = useSelector(state => state.contactForm);

	const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } =
		useFormik({
			initialValues: {
				username: formData.username || '',
				email: formData.email || '',
				messageTitle: formData.messageTitle || '',
				messageBody: formData.messageBody || '',
				agreeTerms: false,
			},
			validationSchema: contactFormSchema,
			onSubmit: (values, { resetForm }) => {
				dispatch(sendContactForm(values))
					.unwrap()
					.then(() => {
						toast.success('Form submitted successfully');
						dispatch(resetFormData());
						resetForm({
							values: {
								username: '',
								email: '',
								messageTitle: '',
								messageBody: '',
								agreeTerms: false,
							},
						});
					})
					.catch(error => {
						toast.error(error.message || 'Error submitting form');
					});
			},
		});

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
