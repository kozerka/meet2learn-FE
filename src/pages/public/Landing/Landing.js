import Features from '../../../components/features/FeaturesSection/Features';
import Hero from '../../../components/features/HeroSection/Hero';
import { Timeline, Faqs } from '../../../components';
import Wrapper from '../../../components/layout/Wrapper';

const Landing = () => {
	return (
		<Wrapper>
			<div style={{ padding: '2rem' }}>
				<Hero />
				<Features />
				<Timeline />
				<Faqs />
			</div>
		</Wrapper>
	);
};

export default Landing;
