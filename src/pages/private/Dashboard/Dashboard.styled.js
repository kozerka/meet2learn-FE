import styled from 'styled-components';
const Container = styled.div`
	height: 86vh;
	@media screen and (max-width: 992px) {
		div {
			grid-template-columns: 5rem auto;
		}
	}
	@media screen and (max-width: 768px) {
		div {
			grid-template-columns: 1fr;
		}
	}
`;
const DashContainer = styled.div`
	display: grid;
	height: 97%;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
	width: 95%;
	margin: 7rem auto 2rem;
	border-radius: 0.5rem;
	overflow: hidden;
	grid-template-columns: 12rem auto;
`;
export { Container, DashContainer };
