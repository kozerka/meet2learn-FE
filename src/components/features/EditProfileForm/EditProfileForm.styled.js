import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

const StyledInput = styled.input`
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
const StyledTextArea = styled.textarea`
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

const StyledLabel = styled.label`
	text-align: left;
	font-size: 0.7rem;
	font-weight: 700;
	margin-right: 2rem;
`;

const ErrorText = styled.div`
	${({ theme }) => theme.primary};
	font-size: 0.8rem;
	margin-top: 0.5rem;
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

export { StyledInput, StyledLabel, StyledTextArea, ErrorText, RemoveBtn, Form, SmallInput };
