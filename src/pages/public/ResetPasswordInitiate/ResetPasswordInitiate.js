import { useState } from 'react';
import resetPass from '../../../assets/img/resetPass.png';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import { Image, ImageContainer } from '../../../components/ui/Image.styled';
import {
	PageContainer,
	ContentContainer,
	FormContainer,
	TextCenterContainer,
} from '../../../components/ui/Containers';
import { useDispatch } from 'react-redux';
import ResetPasswordForm from '../../../components/features/ResetPasswordForm/ResetPasswordForm';

const ResetPasswordInitiate = () => {
	const dispatch = useDispatch();
	const [emailSent, setEmailSent] = useState(false);

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
							<ResetPasswordForm dispatch={dispatch} setEmailSent={setEmailSent} />
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
