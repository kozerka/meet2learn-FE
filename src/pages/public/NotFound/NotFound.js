import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../../../components/layout/Wrapper';
const NotFound = () => {
	const error = useRouteError();

	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<h3>Oppps! page not found</h3>
					<p>we can&apos;t find the page you are looking for</p>
					<Link to={'/'}>back home</Link>
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<h3>Something went wrong and error ocurred</h3>
		</Wrapper>
	);
};

export default NotFound;
