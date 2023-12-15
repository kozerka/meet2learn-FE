import styled from 'styled-components';
export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	justify-content: center;
	padding: 1.5rem;
	margin-top: 2rem;
	height: 18rem;
	margin-top: 2rem;
	@media (min-width: 1024px) {
		margin-top: 0;
		height: 24rem;
	}
	@media (min-width: 1280px) {
		height: 28rem;
	}
`;

export const Image = styled.img`
	object-fit: contain;
	height: 16rem;
	@media (min-width: 772px) {
		height: 22rem;
	}
	@media (min-width: 992px) {
		height: 24rem;
	}
`;
