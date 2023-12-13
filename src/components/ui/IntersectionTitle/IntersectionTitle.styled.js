import styled from 'styled-components';

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	padding: 0 2rem;
	@media (min-width: 1024px) {
		margin: 0 auto;
		text-align: left;
	}
`;

const Title = styled.h2`
	text-transform: uppercase;
	margin-top: 3rem;
	font-weight: 500;
	color: ${({ theme }) => theme.primary};
	font-size: 1.3rem;
	margin-bottom: -0.2rem;
`;

const SubTitle = styled.h3`
	margin-top: 0.5rem;
	/* margin-bottom: 6rem; */
	color: ${({ theme }) => theme.text};
	font-size: 2.5rem;
	text-transform: uppercase;
	font-weight: 700;
	color: ${({ theme }) => theme.text};
	border-bottom: 4px solid ${({ theme }) => theme.secondary};

	letter-spacing: 3px;
`;
export { Content, Title, SubTitle };
