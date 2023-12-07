import styled from 'styled-components';

export const NavContainer = styled.div`
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
