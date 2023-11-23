import styled from 'styled-components';

export const StyledInput = styled.input`
	min-width: 320px;
	width: 100%;
	padding: 1rem;
	border: none;
	display: block;
	background-color: ${({ theme }) => theme.body};
	border-radius: 0.5rem;
	margin: 0.5rem auto 1rem auto;
	border: ${({ $hasError, theme }) => ($hasError ? `2px solid ${theme.primary}` : 'none')};
`;

export const StyledLabel = styled.label`
	text-align: left;
	font-size: 0.7rem;
	font-weight: 700;
`;
