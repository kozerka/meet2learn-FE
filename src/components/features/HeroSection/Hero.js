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
import animation from '../../../assets/animations/Animation - 1699902481250.json';
import Lottie from 'lottie-react';
import { Button } from '../../ui';

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
						<StyledLink to={'/register'}>
							<Button $primary={true}>Register</Button>
						</StyledLink>

						<a href={'#timeline'}>
							<Button $secondary={true}>Learn more</Button>
						</a>
					</ButtonContainer>
				</Content>

				<Lottie className={'animation'} animationData={animation} loop={true} />
			</Container>
		</Section>
	);
};

export default Hero;
