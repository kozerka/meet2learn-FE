import styled from 'styled-components';

export const StyledInput = styled.input`
	position: relative;
	min-width: 320px;
	width: 100%;
	padding: 1rem 2.5rem;
	border: none;
	display: block;
	background-color: ${({ theme }) => theme.body};
	color: ${({ theme }) => theme.text};
	border-radius: 0.5rem;
	margin: 0.5rem auto 1rem auto;
	border: ${({ $hasError, theme }) => ($hasError ? `2px solid ${theme.primary}` : 'none')};
`;
export const StyledTextArea = styled.textarea`
	position: relative;
	min-width: 320px;
	width: 100%;
	padding: 1rem 2.5rem;
	border: none;
	display: block;
	background-color: ${({ theme }) => theme.body};
	color: ${({ theme }) => theme.text};
	border-radius: 0.5rem;
	margin: 0.5rem auto 1rem auto;
	border: ${({ $hasError, theme }) => ($hasError ? `2px solid ${theme.primary}` : 'none')};
`;

export const StyledLabel = styled.label`
	text-align: left;
	font-size: 0.7rem;
	font-weight: 700;
`;
