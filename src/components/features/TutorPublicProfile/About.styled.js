import styled from 'styled-components';

const InfoContainer = styled.div`
	padding: 20px;

	color: ${({ theme }) => theme.text};
	border-radius: 8px;
`;

const SectionLabel = styled.h2`
	font-size: 1.2rem;
	margin-bottom: 10px;
`;

const SectionLabelSpan = styled.span`
	border-bottom: 4px solid ${({ theme }) => theme.primary};
`;

const About = styled.p`
	font-size: 1rem;
	margin-bottom: 20px;
`;
const Bio = styled.p`
	font-size: 1rem;
	margin-bottom: 20px;
`;

const ExperienceItem = styled.div`
	margin: 1.4rem 0;
`;

const ExperienceDescription = styled.p`
	font-size: 0.9rem;
`;

export {
	InfoContainer,
	SectionLabel,
	SectionLabelSpan,
	About,
	Bio,
	ExperienceItem,
	ExperienceDescription,
};
