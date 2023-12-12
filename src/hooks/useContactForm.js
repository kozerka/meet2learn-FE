import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { resetFormData } from '../store/slices/contactFormSlice';
import { sendContactForm } from '../store/thunks';
import { toast } from 'react-toastify';
import { contactFormSchema } from '../schemas';

export const useContactForm = () => {
	const dispatch = useDispatch();
	const { formData } = useSelector(state => state.contactForm);

	return useFormik({
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
};
