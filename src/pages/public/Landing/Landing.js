import { Features, Hero, Faqs, Timeline } from '../../../components/features';
import { Wrapper } from '../../../components/layout';

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
