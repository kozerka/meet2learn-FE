import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

const StyledInput = styled.input`
	position: relative;
	width: 100%;
	min-width: 120px;
	padding: 1.2rem 0.5rem;
	margin: 1rem 0;
	border: none;
	display: block;
	background-color: ${({ theme }) => theme.body};
	color: ${({ theme }) => theme.text};
	border-radius: 0.5rem;
	border: ${({ $hasError, theme }) => ($hasError ? `2px solid ${theme.primary}` : 'none')};
	@media (min-width: 768px) {
		min-width: 200px;
		padding: 1rem 2.5rem;
		margin: 0.5rem auto 1rem auto;
	}
`;
const StyledTextArea = styled.textarea`
	position: relative;
	height: 150px;
	width: 100%;
	padding: 1.2rem 0.5rem;
	margin: 1rem 0;
	min-width: 120px;
	border: none;
	display: block;
	background-color: ${({ theme }) => theme.body};
	color: ${({ theme }) => theme.text};
	border-radius: 0.5rem;
	border: ${({ $hasError, theme }) => ($hasError ? `2px solid ${theme.primary}` : 'none')};
	@media (min-width: 768px) {
		min-width: 320px;
		padding: 1rem 2.5rem;
		margin: 0.5rem auto 1rem auto;
	}
`;

const StyledLabel = styled.label`
	text-align: left;
	font-size: 0.7rem;
	font-weight: 700;
	margin-right: 2rem;
`;

const RemoveBtn = styled.button`
	border: none;
	background-color: transparent;
	color: ${({ theme }) => theme.primary};
	cursor: pointer;
`;

const Form = styled(FormikForm)`
	width: 100%;
`;

const SmallInput = styled(StyledInput)`
	min-width: 120px;
	padding: 0.5rem 2.5rem;
	align-self: flex-start;
`;

export { StyledInput, StyledLabel, StyledTextArea, RemoveBtn, Form, SmallInput };
