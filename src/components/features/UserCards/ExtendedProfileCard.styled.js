import styled from 'styled-components';

const InfoContainer = styled.div`
	background-color: ${({ theme }) => theme.background};
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	margin-bottom: 4rem;
	max-width: 1200px;
	width: 100%;
	margin: 2rem auto;
	padding: 2rem;
`;
const SubjectLabel = styled.span`
	background-color: ${({ theme }) => theme.secondary};
	color: #fff;
	margin-right: 1rem;
	padding: 0.25rem 0.5rem;
	border-radius: 0.25rem;
	font-size: 0.7rem;
	text-transform: uppercase;
`;
const Info = styled.p`
	font-size: 1rem;
`;

const SectionLabel = styled.div`
	margin-top: 20px;
	margin-bottom: 10px;
`;

const SectionLabelSpan = styled.span`
	font-weight: bold;
	font-size: 1.2rem;
	color: ${({ theme }) => theme.primary};
`;

const About = styled.p`
	font-size: 0.9rem;
`;
const ExperiencesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	flex-direction: column;
`;

const ExperienceItem = styled.div`
	background-color: ${({ theme }) => theme.body};
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 10px;
	flex-basis: 100%;

	@media (min-width: 768px) {
		flex-basis: calc(50% - 1rem);
	}
`;
const ExperienceDescription = styled.p`
	font-size: 0.9rem;
`;
export {
	InfoContainer,
	Info,
	SectionLabel,
	SectionLabelSpan,
	About,
	ExperienceItem,
	ExperienceDescription,
	ExperiencesContainer,
	SubjectLabel,
};
