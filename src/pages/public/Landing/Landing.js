import Features from '../../../components/features/Features';
import Hero from '../../../components/features/Hero';
import { Timeline, Faqs } from '../../../components';
import Wrapper from '../../../components/layout/Wrapper';

const Landing = () => {
	return (
		<Wrapper>
			<div>
				<h1>Landing</h1>
				<Hero />
				<Features />
				<Timeline />
				<Faqs />
			</div>
		</Wrapper>
	);
};

export default Landing;
