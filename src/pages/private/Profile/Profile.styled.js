import styled from 'styled-components';

const ProfileContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 2rem auto;
	padding: 1rem 2rem;
	border-radius: 1rem;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-color: ${({ theme }) => theme.background};
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;
const Greetings = styled.div`
	margin: 1rem 0;
	border-bottom: 4px solid ${({ theme }) => theme.primary};
	font-size: 0.8rem;

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;
export { ProfileContainer, Greetings };
