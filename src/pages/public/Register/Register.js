import register from '../../../assets/img/register.png';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import { PageContainer, ContentContainer, FormContainer } from '../../../components/ui/Containers';
import { Image, ImageContainer } from '../../../components/ui/Image.styled';
import { LinkStyled } from '../../../components/ui/Link.styled';
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
