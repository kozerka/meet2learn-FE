import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<section>
			<h1>Learning is better together. </h1>
			<p>Become a member of our community.</p>
			<Link to={'/register'}>Register</Link>
		</section>
	);
};

export default Hero;
