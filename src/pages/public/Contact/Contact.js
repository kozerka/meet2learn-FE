import beInTouch from '../../../assets/img/beIntouch.png';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';
import { Image, ImageContainer } from '../../../components/ui/Image.styled';
import { PageContainer, ContentContainer, FormContainer } from '../../../components/ui/Containers';
import ContactForm from '../../../components/features/ContactForm/ContactForm';

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
