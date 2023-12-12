import styled from 'styled-components';
const FeedbackContainer = styled.div`
	text-align: center;
	margin-top: 3rem;
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem;
	gap: 2rem;
`;

const TextArea = styled.textarea`
	margin-bottom: 10px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	width: 100%;
	min-height: 100px;
`;

const ErrorContainer = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export { FeedbackContainer, ButtonContainer, TextArea, ErrorContainer };
