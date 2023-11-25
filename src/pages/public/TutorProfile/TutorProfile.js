import { useParams } from 'react-router-dom';
import Tabs from '../../../components/layout/Tabs/Tabs';
import Wrapper from '../../../components/layout/Wrapper';
const TutorProfile = () => {
	const { id } = useParams();
	return (
		<Wrapper>
			<div>TutorProfile o {id}</div>
			<Tabs
				tabs={[
					{
						label: 'About',
						content: <p>Profile content</p>,
					},

					{
						label: 'Reviews',
						content: <p>Reviews content</p>,
					},
				]}
			/>
		</Wrapper>
	);
};

export default TutorProfile;
