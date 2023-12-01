import styled from 'styled-components';
const NotesGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	margin: 2rem auto;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const NoteContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 250px;
	height: 250px;
	background-color: ${({ theme }) => theme.body};
	padding: 1.2rem;
	margin: 1rem 0;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	position: relative;
	overflow: hidden;
`;

const Title = styled.h3`
	margin-top: 0;
`;

const Tag = styled.span`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.textInverted};
	border-radius: 5px;
	padding: 4px;
	font-size: 0.8rem;
	margin-right: 5px;
`;

const Content = styled.p`
	margin-top: 20px;
	word-break: break-all;
	overflow-wrap: break-word;
	font-size: 0.9rem;
`;

const IconContainer = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
	display: flex;
	gap: 5px;
	svg {
		transition: all 0.3s ease;
		border-radius: 4px;
		padding: 4px;

		&:hover {
			cursor: pointer;
		}
		&:first-child:hover {
			background-color: ${({ theme }) => theme.edit};
			color: ${({ theme }) => theme.textInverted};
		}
		&:last-child:hover {
			background-color: ${({ theme }) => theme.delete};
			color: ${({ theme }) => theme.textInverted};
		}
	}
`;

const DateContainer = styled.div`
	font-size: 0.8rem;
	position: absolute;
	bottom: 20px;
	left: 20px;
`;

export { NotesGrid, NoteContainer, Title, Tag, Content, IconContainer, DateContainer };
