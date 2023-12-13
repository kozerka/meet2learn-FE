import styled from 'styled-components';
const Message = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: ${props => (props.$isTutor ? 'row-reverse' : 'row')};
	margin-bottom: 10px;

	.content {
		display: flex;

		padding: 5px 10px;
		border-radius: 10px;
		background-color: ${({ theme }) => theme.body};
		margin-left: ${props => (props.$isTutor ? '4rem' : '0')};
		margin-right: ${props => (props.$isTutor ? '0' : '4rem')};
		word-break: break-all;
		gap: 1rem;
		div {
			display: flex;
			gap: 1rem;
			.hour {
				font-size: 0.5rem;
			}
		}
	}

	img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin: 0.3rem;
	}
	.trash-icon {
		font-size: 1rem;
		display: none;
		cursor: pointer;
	}

	&:hover .trash-icon {
		display: inline-block;
		color: red;
	}
`;
export default Message;
