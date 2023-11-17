import Faqs from '../../../components/Faqs';
import Features from '../../../components/Features';
import Hero from '../../../components/Hero';
import Timeline from '../../../components/Timeline';
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
