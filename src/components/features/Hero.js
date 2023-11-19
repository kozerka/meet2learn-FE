// import { Link } from 'react-router-dom';

import {
	Section,
	Container,
	Content,
	Heading,
	Span,
	Paragraph,
	ButtonContainer,
	StyledLink,
} from './Hero.styled';
import animation from '../../assets/animations/Animation - 1699902481250.json';
import Lottie from 'lottie-react';
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
							<a href={'#timeline'}>Learn more</a>
						</Button>
					</ButtonContainer>
				</Content>

				<Lottie animationData={animation} loop={true} />
			</Container>
		</Section>
	);
};

export default Hero;
