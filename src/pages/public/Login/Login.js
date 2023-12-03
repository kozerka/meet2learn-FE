import login from '../../../assets/img/login2.png';
import Button from '../../../components/ui/Button';
import { useFormik } from 'formik';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import { loginFormSchema } from '../../../schemas';
import FormField from '../../../components/features/Form/FormField';
import { PageContainer, ContentContainer, FormContainer } from '../../../components/ui/Containers';
import { Image, ImageContainer } from '../../../components/ui/Image.styled';
import { LinkStyled } from '../../../components/ui/Link.styled';
import { FiMail, FiLock } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { fetchUser, loginUser } from '../../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit } =
		useFormik({
			initialValues: { email: '', password: '' },
			validationSchema: loginFormSchema,
			onSubmit: async (values, { setSubmitting }) => {
				try {
					const actionResponse = await dispatch(loginUser(values));
					if (loginUser.fulfilled.match(actionResponse)) {
						fetchUser();
						toast.success('Login successful!');
						navigate('/dashboard');
					} else {
						throw actionResponse;
					}
				} catch (error) {
					const errorMessage = error?.payload?.message || 'Error occurred during login';
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
					<Image src={login} alt={'login'} />
				</ImageContainer>
				<FormContainer>
					<IntersectionTitle title={'go to your dashboard'} text={'login'} />
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
						<FormField
							label={'Password'}
							type={'password'}
							name={'password'}
							errors={errors}
							values={values}
							touched={touched}
							handleChange={handleChange}
							handleBlur={handleBlur}
							icon={<FiLock />}
						/>

						<Button $disabled={isSubmitting} $primary $fullWidth type={'submit'}>
							{isSubmitting ? 'Logging in...' : 'Login'}
						</Button>
					</form>
					<p>
						Don&apos;t have an account? <LinkStyled to={'/register'}>Register</LinkStyled>
					</p>
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default Login;
