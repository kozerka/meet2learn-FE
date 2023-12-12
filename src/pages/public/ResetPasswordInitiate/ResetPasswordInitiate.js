import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { resetPasswordInitiate } from '../../../store/thunks';
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
			onSubmit: async (values, { setSubmitting, resetForm }) => {
				try {
					const actionResponse = await dispatch(resetPasswordInitiate(values.email));
					if (resetPasswordInitiate.fulfilled.match(actionResponse)) {
						setEmailSent(true);
						resetForm();
						toast.success('Password reset request has been sent');
					} else {
						throw actionResponse;
					}
				} catch (error) {
					const errorMessage = error?.payload?.message || 'Error occurred during password reset';
					toast.error(errorMessage);
				} finally {
					setSubmitting(false);
				}
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
								Now you will receive an email with a link to reset your password. Some mail boxes
								can put it into spam so be sure to check it. Please follow the instructions in the
								email.
							</TextCenterContainer>
						</>
					)}
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default ResetPasswordInitiate;
