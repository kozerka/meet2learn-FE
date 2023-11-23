import register from '../../../assets/img/register.png';
import Button from '../../../components/ui/Button';
import { useFormik } from 'formik';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import CheckboxField from '../../../components/features/Form/CheckboxField';
import { registerFormSchema } from '../../../schemas';
import FormField from '../../../components/features/Form/FormField';
import {
	PageContainer,
	ContentContainer,
	FormContainer,
	SelectContainer,
} from '../../../components/ui/Containers';
import { Image, ImageContainer } from '../../../components/ui/Image.styled';
import { LinkStyled } from '../../../components/ui/Link.styled';
import { registerFormFields } from '../../../data';
// import { toast } from 'react-toastify';
// import axios from 'axios';

const Register = () => {
	const { values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit } =
		useFormik({
			initialValues: {
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
				role: 'student',
				agreeTerms: false,
			},
			validationSchema: registerFormSchema,
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
					<Image src={register} alt={'register'} />
				</ImageContainer>
				<FormContainer>
					<IntersectionTitle title={'Create an account'} text={'register'} />
					<form onSubmit={handleSubmit}>
						{registerFormFields.map((field, index) => (
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

						<SelectContainer>
							<label htmlFor={'role'}>Role:</label>
							<select name={'role'} onChange={handleChange} onBlur={handleBlur} value={values.role}>
								<option value={'student'}>Student</option>
								<option value={'tutor'}>Tutor</option>
							</select>
						</SelectContainer>

						<CheckboxField
							label={
								'I agree to the processing of my personal data for registration and creating an account on meet2learn.'
							}
							name={'agreeTerms'}
							errors={errors}
							touched={touched}
							handleChange={handleChange}
						/>
						<Button $disabled={isSubmitting} $primary $fullWidth type={'submit'}>
							{isSubmitting ? 'Registering...' : 'Register'}
						</Button>
					</form>
					<p>
						Already a user? <LinkStyled to={'/login'}>Login</LinkStyled>
					</p>
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default Register;
