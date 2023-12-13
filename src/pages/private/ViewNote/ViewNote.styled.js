import styled from 'styled-components';

const Title = styled.h3`
	margin-top: 0;
`;

const TagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 5px;
`;

const Tag = styled.span`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.textInverted};
	border-radius: 5px;
	padding: 4px;
	font-size: 0.8rem;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 2rem;
`;

export { Title, TagsContainer, Tag, Content };
