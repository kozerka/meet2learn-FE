import styled from 'styled-components';

export const CheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	margin: 1rem 0;
	margin: 1rem 0;
	border-radius: 0.5rem;
	border: ${({ $hasError, theme }) => ($hasError ? `2px solid ${theme.primary}` : 'none')};
	padding: 1rem;

	label {
		margin-left: 0.5rem;
		text-align: left;
		font-size: 0.7rem;
		flex: 1;
		word-wrap: wrap;
	}
`;
