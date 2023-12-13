import { CustomContainer, SectionTitle } from '../../../components/ui';
import { UploadForm } from '../../../components/features/Forms';
const UploadAvatar = () => {
	return (
		<CustomContainer>
			<SectionTitle title={'Upload Avatar for your profile'} />
			<UploadForm />
		</CustomContainer>
	);
};

export default UploadAvatar;
