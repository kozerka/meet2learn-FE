import { useDispatch } from 'react-redux';
import resetPass from '../../../assets/img/resetPass.png';
import {
	Image,
	ImageContainer,
	PageContainer,
	ContentContainer,
	FormContainer,
	IntersectionTitle,
} from '../../../components/ui';

import { ChangePasswordAfterResetForm } from '../../../components/features/Forms';

const ResetPasswordFinalize = () => {
	const dispatch = useDispatch();

	return (
		<PageContainer>
			<ContentContainer>
				<ImageContainer>
					<Image src={resetPass} alt={'reset password'} loading={'lazy'} />
				</ImageContainer>
				<FormContainer>
					<IntersectionTitle title={'Provide new Password'} text={'Reset'} />
					<ChangePasswordAfterResetForm dispatch={dispatch} />
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default ResetPasswordFinalize;
