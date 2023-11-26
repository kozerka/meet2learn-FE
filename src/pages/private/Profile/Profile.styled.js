import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	gap: 10px;

	@media (max-width: 992px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const StyledLink = styled(Link)`
	padding: 0.9rem;
	border-radius: 6px;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: ${({ theme }) => theme.text};

	&:hover {
		background-color: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.textInverted};
	}
`;
const ProfileContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 2rem auto;
	padding: 1rem 2rem;
	border-radius: 1rem;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-evenly;
	background-color: ${({ theme }) => theme.background};
`;
const Greetings = styled.div`
	margin: 1rem 0;
	border-bottom: 4px solid ${({ theme }) => theme.primary};

	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;
export { Navigation, ProfileContainer, Greetings, StyledLink };
