import { SectionTitle } from '../../../components';
import { CustomContainer } from '../../../components/ui/Containers';
import UploadForm from '../../../components/features/UploadForm/UploadForm';
const UploadAvatar = () => {
	return (
		<CustomContainer>
			<SectionTitle title={'Upload Avatar for your profile'} />
			<UploadForm />
		</CustomContainer>
	);
};

export default UploadAvatar;
