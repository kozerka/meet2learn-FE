import styled from 'styled-components';
const SearchBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin: 4rem 0 2rem;
`;

const InputContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const StyledInput = styled.input`
	min-width: 320px;
	width: 100%;
	padding: 1.1rem 0.5rem;
	border: ${({ $hasError, theme }) => ($hasError ? `2px solid ${theme.primary}` : 'none')};
	display: block;
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
	border-radius: 0.25rem;
`;
export { SearchBarContainer, InputContainer, StyledInput };
