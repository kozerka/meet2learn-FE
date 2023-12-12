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

import ChangePasswordAfterReset from '../../../components/features/ChangePasswordAfterResetForm/ChangePasswordAfterReset';

const ResetPasswordFinalize = () => {
	const dispatch = useDispatch();

	return (
		<PageContainer>
			<ContentContainer>
				<ImageContainer>
					<Image src={resetPass} alt={'reset password'} />
				</ImageContainer>
				<FormContainer>
					<IntersectionTitle title={'Provide new Password'} text={'Reset'} />
					<ChangePasswordAfterReset dispatch={dispatch} />
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default ResetPasswordFinalize;
