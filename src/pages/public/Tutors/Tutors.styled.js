import styled from 'styled-components';
const TutorsGrid = styled.div`
	display: grid;
	gap: 4rem;
	margin: 2rem auto;
	padding: 1rem;

	@media (min-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 768px) and (max-width: 1199px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;

const NoResultsMessage = styled.div`
	text-align: center;
	font-size: 1.2rem;
	color: ${({ theme }) => theme.text};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 51vh;
	flex-grow: 1;
	p {
		padding: 1rem;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.primary};
	}
	img {
		max-width: 20rem;
		margin-bottom: 5rem;
	}
`;
export { TutorsGrid, NoResultsMessage };
