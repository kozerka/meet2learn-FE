// import { Link } from 'react-router-dom';

import {
	Section,
	Container,
	ImageContainer,
	Image,
	Content,
	Heading,
	Span,
	Paragraph,
	ButtonContainer,
	StyledLink,
} from './Hero.styled';
import forum2 from '../../assets/img/forum2.png';
import Button from '../ui/Button';
const Hero = () => {
	return (
		<Section>
			<Container>
				<Content>
					<Heading>
						Learning is <Span>better</Span>together
					</Heading>
					<Paragraph>
						Become a member of our community.
						<br />
						Sign up for a free account and enjoy collaborative learning.
					</Paragraph>
					<ButtonContainer>
						<Button $primary={true}>
							<StyledLink to={'/register'}>Register</StyledLink>
						</Button>
						<Button $secondary={true}>
							<StyledLink href={'#'}>Learn more</StyledLink>
						</Button>
					</ButtonContainer>
				</Content>
				<ImageContainer>
					<Image src={forum2} alt={'people chating'} />
				</ImageContainer>
			</Container>
		</Section>
	);
};

export default Hero;
