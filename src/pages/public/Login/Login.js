import login from '../../../assets/img/login2.png';
import Button from '../../../components/ui/Button';
import { useFormik } from 'formik';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import { loginFormSchema } from '../../../schemas';
import FormField from '../../../components/features/Form/FormField';
import { PageContainer, ContentContainer, FormContainer } from '../../../components/ui/Containers';
import { Image, ImageContainer } from '../../../components/ui/Image.styled';
import { LinkStyled } from '../../../components/ui/Link.styled';
// import { toast } from 'react-toastify';
// import axios from 'axios';

const Login = () => {
	const { values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit } =
		useFormik({
			initialValues: { email: '', password: '' },
			validationSchema: loginFormSchema,
			onSubmit: async values => {
				console.log(values);
				// TODO try {
				// 	const response = await axios.post('/api/auth/login', values);
				// 	// Handle success response
				// 	toast.success('Logged in successfully');
				// 	// stany Redux
				// } catch (error) {
				// 	if (error.response) {
				// 		// Wyświetl błędy z backendu
				// 		toast.error(error.response.data.message);
				// 	} else {
				// 		// Wyświetl inny błąd
				// 		toast.error('An error occurred');
				// 	}
				// }
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
