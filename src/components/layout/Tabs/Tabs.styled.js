import styled from 'styled-components';
const TabsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 3rem auto;
`;

const TabLabels = styled.div`
	display: flex;
`;

const Tab = styled.label`
	flex-grow: 1;
	cursor: pointer;
	text-align: center;
	padding: 1rem;
	font-size: 1.1em;
	line-height: 1em;

	&.active {
		color: ${({ theme }) => theme.primary};
		border-bottom: 4px solid ${({ theme }) => theme.primary};
	}
`;

const TabContent = styled.div`
	padding: 2rem 0;
`;
export { TabsContainer, TabLabels, Tab, TabContent };
