import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { resetPasswordInitiate } from '../../../store/slices/userSlice';
import resetPass from '../../../assets/img/resetPass.png';
import Button from '../../../components/ui/Button';
import { useFormik } from 'formik';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import { emailCheckForResetSchema } from '../../../schemas';
import { Image, ImageContainer } from '../../../components/ui/Image.styled';
import FormField from '../../../components/features/Form/FormField';
import {
	PageContainer,
	ContentContainer,
	FormContainer,
	TextCenterContainer,
} from '../../../components/ui/Containers';
import { FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';
const ResetPasswordInitiate = () => {
	const dispatch = useDispatch();
	const [emailSent, setEmailSent] = useState(false);

	const { values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit } =
		useFormik({
			initialValues: {
				email: '',
			},
			validationSchema: emailCheckForResetSchema,
			onSubmit: (values, { setSubmitting }) => {
				dispatch(resetPasswordInitiate(values.email))
					.then(() => {
						setEmailSent(true);
						toast.success('Password reset email has been sent');
					})
					.catch(error => {
						toast.error(`Error: ${error.message}`);
					})
					.finally(() => {
						setSubmitting(false);
					});
			},
		});

	return (
		<PageContainer>
			<ContentContainer>
				<ImageContainer>
					<Image src={resetPass} alt={'reset password'} />
				</ImageContainer>
				<FormContainer>
					{!emailSent ? (
						<>
							<IntersectionTitle title={'Provide your email '} text={'Reset'} />
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
						</>
					) : (
						<>
							<IntersectionTitle title={'Link sent...'} text={'Go to mail'} />
							<TextCenterContainer>
								If the provided email exists in our database, you will receive an email with a link
								to reset your password. Please follow the instructions in the email.
							</TextCenterContainer>
						</>
					)}
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default ResetPasswordInitiate;
