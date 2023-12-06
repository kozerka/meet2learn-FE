import styled from 'styled-components';
export const CommentWrapper = styled.div`
	margin: 1rem;
	display: flex;
	align-items: start;
	justify-items: center;
	border-radius: 0.75rem;
`;

export const Avatar = styled.img`
	border-radius: 50%;
	width: 32px;
	height: 32px;
	object-fit: cover;
`;

export const CommentContent = styled.div`
	margin-left: 1rem;
	flex: 1;
`;

export const UserName = styled.h5`
	margin: 0;
	color: ${({ theme }) => theme.text};
	font-size: 0.6rem;
`;

export const CommentText = styled.p`
	margin: 0.25rem 0;
	font-size: 0.9rem;
`;

export const CommentDate = styled.p`
	color: #6b7280;
	font-size: 0.75rem;
`;

export const DeleteButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	cursor: pointer;
	display: none;
`;
export const CommentBubble = styled.div`
	background-color: ${({ theme }) => theme.body};
	padding: 10px;
	border-radius: 10px;
	margin-left: 10px;
	position: relative;
	padding-right: 2rem;
	&::before {
		content: '';
		content: '';
		position: absolute;
		top: 10px;
		left: -10px;
		width: 0;
		height: 0;
		border-style: solid;
		transition: all 0.3s ease-in-out;
		border-width: 10px 10px 10px 0;
		border-color: transparent ${({ theme }) => theme.body} transparent transparent;
	}
	&:hover {
		opacity: 0.6;
	}
	&:hover ${DeleteButton} {
		opacity: 1;
		display: block;
		color: red;
	}
`;

export const UserWrapper = styled.div`
	margin: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
