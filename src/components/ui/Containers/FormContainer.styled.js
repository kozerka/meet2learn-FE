import styled from 'styled-components';
export const FormContainer = styled.div`
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.background};
	box-shadow: 1px 1px 22px 1px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem 3rem;
	margin: 0 3rem 3rem;
	gap: 3rem;
	width: 90%;
	max-width: 800px;
	button {
		margin-top: 1rem;
	}
`;
