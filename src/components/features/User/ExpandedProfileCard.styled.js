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
`;

const About = styled.p`
	font-size: 0.9rem;
`;

const ExperienceItem = styled.div`
	background-color: ${({ theme }) => theme.body};
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 10px;
`;

const ExperienceTitle = styled.h3`
	font-size: 1.1rem;
	color: #444;
`;

const ExperiencePeriod = styled.span`
	font-size: 0.9rem;
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
	ExperienceTitle,
	ExperiencePeriod,
	ExperienceDescription,
};
