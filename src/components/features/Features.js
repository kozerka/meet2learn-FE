import IntersectionTitle from '../layout/IntersectionTitle';
import { featuresData } from '../../data/featuresData';
import { FeaturesContainer, FeatureBox, FeatureImg } from './Features.styled';

const Features = () => {
	return (
		<div>
			<IntersectionTitle title={'Features'} text={'What you get'} />
			<FeaturesContainer>
				{featuresData.map((feature, index) => (
					<FeatureBox key={index}>
						<FeatureImg src={feature.img} alt={feature.title} />
						<h3>{feature.title}</h3>
						<p>{feature.text}</p>
					</FeatureBox>
				))}
			</FeaturesContainer>
		</div>
	);
};

export default Features;
