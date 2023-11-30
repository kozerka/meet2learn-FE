import styled from 'styled-components';

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	input[type='file'] {
		display: none;
	}
	label {
		border: 3px solid ${({ theme }) => theme.secondary};
		padding: 1rem 2rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		border-radius: 0.5rem;
		transition: transform 0.3s ease;
		&:hover {
			transform: scale(1.05);
			background-color: ${({ theme }) => theme.secondary};
			color: ${({ theme }) => theme.textInverted};
		}
	}
`;

export { FormStyled };
