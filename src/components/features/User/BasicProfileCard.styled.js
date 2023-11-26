import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.body};
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin: 10px;
	width: 300px;
`;

const ImageContainer = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
	margin-bottom: 10px;

	img {
		width: 100%;
		height: auto;
	}
`;

const ContentContainer = styled.div`
	text-align: center;
`;

const Name = styled.h2`
	margin: 0;
	color: ${({ theme }) => theme.text};
	font-size: 1.2rem;
`;

const Info = styled.p`
	color: ${({ theme }) => theme.text};
	font-size: 1rem;
	padding: 0.3rem;
`;
export { CardContainer, ImageContainer, ContentContainer, Name, Info };
