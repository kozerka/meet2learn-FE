import styled from 'styled-components';
export const FormContainer = styled.div`
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.background};
	box-shadow: 1px 1px 22px 1px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 390px;
	padding: 2rem 2rem;
	margin-bottom: 2rem;
	margin: 0 3rem 3rem;
	gap: 3rem;
	max-width: 1200px;
	button {
		margin-top: 1rem;
	}

	.my-jodit-editor {
		color: black;
	}

	@media (min-width: 766px) {
		width: 100%;
		padding: 2rem 3rem;
	}
`;
