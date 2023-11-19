import styled from 'styled-components';

const FeaturesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
	padding: 1rem;
`;

const FeatureImg = styled.img`
	max-width: 180px;
	height: auto;
	margin-bottom: 1rem;
	padding: 2rem;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.1);
	}
`;

const FeatureBox = styled.div`
	display: flex;
	min-width: 18.75rem;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 300px;
	padding: 1rem;
	gap: 2rem;
	overflow: hidden;
	margin: 1rem;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.background};
	p {
		padding: 0 1rem 1rem;
		font-size: 0.9rem;
	}
	@media (min-width: 772px) and (max-width: 1199px) {
		flex: 0 0 48%;
	}

	@media (min-width: 1200px) {
		flex: 0 0 30%;
	}
`;

export { FeaturesContainer, FeatureImg, FeatureBox };
