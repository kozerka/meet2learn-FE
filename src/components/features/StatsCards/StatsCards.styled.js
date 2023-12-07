import styled from 'styled-components';
export const Wrapper = styled.section`
	margin: 4rem auto;
	align-items: center;
	justify-items: center;
	display: grid;
	row-gap: 2rem;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		column-gap: 1rem;
	}
	@media (min-width: 1120px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media (min-width: 1320px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;
export const Card = styled.article`
	width: 240px;
	height: 160px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	background: ${({ theme }) => theme.background};
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
	border-bottom: 3px solid ${({ theme }) => theme.primary};
	border-radius: 8px;

	header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	.count {
		display: block;
		font-weight: 500;
		font-size: 2rem;
		color: ${({ theme }) => theme.secondary};
		line-height: 2;
	}
	.title {
		margin: 0;
		text-transform: capitalize;
		text-align: left;
		font-size: 1rem;
		text-align: center;
		margin-bottom: 1rem;
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 2.2rem;
			color: ${({ theme }) => theme.secondary};
		}
	}
`;
