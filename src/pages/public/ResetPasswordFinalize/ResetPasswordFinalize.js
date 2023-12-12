import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { resetPasswordFinalize } from '../../../store/slices/userSlice';
import { toast } from 'react-toastify';
import resetPass from '../../../assets/img/resetPass.png';
import { PageContainer, ContentContainer, FormContainer } from '../../../components/ui/Containers';
import { Image, ImageContainer } from '../../../components/ui/Image.styled';
import Button from '../../../components/ui/Button';
import FormField from '../../../components/features/Form/FormField';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import { passwordResetSchema } from '../../../schemas';
import { FiLock } from 'react-icons/fi';

const ResetPasswordFinalize = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			newPassword: '',
			confirmPassword: '',
		},
		validationSchema: passwordResetSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			const token = searchParams.get('token');
			if (token) {
				try {
					const actionResponse = await dispatch(
						resetPasswordFinalize({ token, newPassword: values.newPassword })
					);
					if (resetPasswordFinalize.fulfilled.match(actionResponse)) {
						toast.success('Password reset successfully!');
						resetForm();
						navigate('/login');
					} else {
						throw actionResponse;
					}
				} catch (error) {
					console.log('Reset password error:', error);
					const errorMessage = error?.payload?.message || 'Error occurred during password reset';
					toast.error(errorMessage);
					navigate('/reset-password');
				} finally {
					setSubmitting(false);
				}
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
					<IntersectionTitle title={'Provide new Password'} text={'Reset'} />
					<form onSubmit={formik.handleSubmit}>
						<FormField
							label={'New Password'}
							type={'password'}
							name={'newPassword'}
							errors={formik.errors}
							values={formik.values}
							touched={formik.touched}
							handleChange={formik.handleChange}
							handleBlur={formik.handleBlur}
							icon={<FiLock />}
						/>
						<FormField
							label={'Confirm New Password'}
							type={'password'}
							name={'confirmPassword'}
							errors={formik.errors}
							values={formik.values}
							touched={formik.touched}
							handleChange={formik.handleChange}
							handleBlur={formik.handleBlur}
							icon={<FiLock />}
						/>
						<Button $disabled={formik.isSubmitting} $primary $fullWidth type={'submit'}>
							{formik.isSubmitting ? 'Resetting...' : 'Reset Password'}
						</Button>
					</form>
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default ResetPasswordFinalize;
