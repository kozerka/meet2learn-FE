import Wrapper from './layout/Wrapper';
import { Link } from 'react-router-dom';

const Timeline = () => {
	return (
		<Wrapper>
			<div>
				<h2>Timeline</h2>
				<h3>How to join</h3>
				<p>its very easy</p>
				<div>
					<div>
						<p>create a free account</p>
						<Link to={'/register'}>register</Link>
					</div>
					<div>
						<p>Pick your role - student or tutor</p>
					</div>
					<div>
						<p>log in to your private dashboard and complete your profile</p>
						<Link to={'/login'}>login to dashboard</Link>
					</div>
					<div>
						<p>Meet tutors, new friend and start to learn</p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Timeline;
