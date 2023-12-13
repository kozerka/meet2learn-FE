import login from '../../../assets/img/login2.png';
import {
	LinkStyled,
	Image,
	ImageContainer,
	PageContainer,
	ContentContainer,
	FormContainer,
	TextCenterContainer,
	IntersectionTitle,
} from '../../../components/ui';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../../components/features/Forms';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<PageContainer>
			<ContentContainer>
				<ImageContainer>
					<Image src={login} alt={'login'} />
				</ImageContainer>
				<FormContainer>
					<IntersectionTitle title={'go to your dashboard'} text={'login'} />
					<LoginForm dispatch={dispatch} navigate={navigate} />
					<TextCenterContainer>
						<p>
							Don&apos;t have an account? <LinkStyled to={'/register'}>Register</LinkStyled>
						</p>
						<p>
							Don&apos;t remember your password?{' '}
							<LinkStyled to={'/reset-password'}>Reset</LinkStyled>
						</p>
					</TextCenterContainer>
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default Login;
