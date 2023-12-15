import styled from 'styled-components';
const MessageContainer = styled.div`
	padding: 20px;
	background-color: ${({ theme }) => theme.body};
	border-radius: 8px;
	margin: 2rem;
	text-align: center;

	h2 {
		margin: 1rem;
		color: ${({ theme }) => theme.primary};
	}
`;
export const TutorMessage = () => (
	<MessageContainer>
		<h2>Maybe you did&apos;t give enough information to future students?</h2>
		<h3>Fill out your profile to increase your chances of gaining them.</h3>
	</MessageContainer>
);
export const StudentMessage = () => (
	<MessageContainer>
		<h2>You don&apos;t have any connections yet.</h2>
		<h3>Go to the tutor page and choose one to start learning!</h3>
	</MessageContainer>
);
