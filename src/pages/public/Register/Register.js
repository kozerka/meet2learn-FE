import register from '../../../assets/img/register.png';
import {
	LinkStyled,
	Image,
	ImageContainer,
	PageContainer,
	ContentContainer,
	FormContainer,
	IntersectionTitle,
} from '../../../components/ui';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../../components/features/RegisterForm/RegisterForm';

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<PageContainer>
			<ContentContainer>
				<ImageContainer>
					<Image src={register} alt={'register'} />
				</ImageContainer>
				<FormContainer>
					<IntersectionTitle title={'Create an account'} text={'register'} />
					<RegisterForm dispatch={dispatch} navigate={navigate} />
					<p>
						Already a user? <LinkStyled to={'/login'}>Login</LinkStyled>
					</p>
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default Register;
