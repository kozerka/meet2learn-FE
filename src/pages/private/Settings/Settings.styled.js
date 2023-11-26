import { CgDanger } from 'react-icons/cg';
import styled from 'styled-components';

const SettingsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 1200px;
	gap: 3rem;
	@media (max-width: 992px) {
		flex-direction: column;
	}
`;

const Container = styled.div`
	margin: 2rem auto;
	width: 100%;
	padding: 1rem 2rem;
	border-radius: 1rem;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: ${({ theme }) => theme.background};
`;
const Heading = styled.h3`
	align-self: center;
	margin: 1rem 0;
	border-bottom: 4px solid ${({ theme }) => theme.primary};
`;

const Text = styled.p`
	margin: 0 auto;
	text-align: center;
	padding: 1rem 2rem;
	font-size: 0.9rem;
	margin-bottom: 2rem;
`;
const IconStyled = styled(CgDanger)`
	color: ${({ theme }) => theme.primary};
	font-size: 16rem;
	padding: 2rem;
	margin: 0 auto;
`;

export { SettingsContainer, Container, Heading, Text, IconStyled };
