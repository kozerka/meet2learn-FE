import { useFormik } from 'formik';
import FormField from '../../../components/features/Form/FormField';
import CheckboxField from '../../../components/features/Form/CheckboxField';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { sendContactForm, resetFormData } from '../../../store/slices/contactFormSlice';
import Button from '../../../components/ui/Button';
import beInTouch from '../../../assets/img/beIntouch.png';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import { contactFormSchema } from '../../../schemas';
import { Image, ImageContainer } from '../../../components/ui/Image.styled';
import { PageContainer, ContentContainer, FormContainer } from '../../../components/ui/Containers';

const Contact = () => {
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
		<PageContainer>
			<ContentContainer>
				<ImageContainer>
					<Image src={beInTouch} alt={'Be in touch'} />
				</ImageContainer>
				<FormContainer>
					<IntersectionTitle title={'Contact'} text={'If any questions...'} />
					<form onSubmit={handleSubmit}>
						<FormField
							label={'Username'}
							type={'text'}
							name={'username'}
							errors={errors}
							values={values}
							touched={touched}
							handleChange={handleChange}
							handleBlur={handleBlur}
						/>
						<FormField
							label={'Email'}
							type={'email'}
							name={'email'}
							errors={errors}
							values={values}
							touched={touched}
							handleChange={handleChange}
							handleBlur={handleBlur}
						/>
						<FormField
							label={'Title'}
							type={'text'}
							name={'messageTitle'}
							errors={errors}
							values={values}
							touched={touched}
							handleChange={handleChange}
							handleBlur={handleBlur}
						/>
						<FormField
							label={'Your Message'}
							type={'textarea'}
							name={'messageBody'}
							errors={errors}
							values={values}
							touched={touched}
							handleChange={handleChange}
							handleBlur={handleBlur}
						/>
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
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default Contact;
