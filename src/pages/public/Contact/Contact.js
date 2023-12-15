import beInTouch from '../../../assets/img/beIntouch.png';
import {
	Image,
	ImageContainer,
	PageContainer,
	ContentContainer,
	FormContainer,
	IntersectionTitle,
} from '../../../components/ui';
import { ContactForm } from '../../../components/features/Forms';

const Contact = () => {
	return (
		<PageContainer>
			<ContentContainer>
				<ImageContainer>
					<Image src={beInTouch} alt={'Be in touch'} />
				</ImageContainer>
				<FormContainer>
					<IntersectionTitle title={'Contact'} text={'If any questions...'} />
					<ContactForm />
				</FormContainer>
			</ContentContainer>
		</PageContainer>
	);
};

export default Contact;
