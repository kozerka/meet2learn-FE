import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const ExperienceTitle = styled.h3`
	font-size: 1.1rem;
	margin: 0;
`;

const ExperiencePeriod = styled.span`
	font-style: italic;
`;

const ExperienceDescription = styled.p`
	font-size: 0.9rem;
`;

const AboutCard = ({ about, bio, experiences }) => (
	<InfoContainer>
		<SectionLabel>
			<SectionLabelSpan>About</SectionLabelSpan>
		</SectionLabel>
		<About>{about}</About>

		<SectionLabel>
			<SectionLabelSpan>Bio</SectionLabelSpan>
		</SectionLabel>
		<Bio>{bio}</Bio>

		<SectionLabel>
			<SectionLabelSpan>Experience</SectionLabelSpan>
		</SectionLabel>
		{experiences.map((exp, index) => (
			<ExperienceItem key={index}>
				<ExperienceTitle>
					{exp.type} - {exp.name}
				</ExperienceTitle>
				<ExperiencePeriod>{exp.period}</ExperiencePeriod>
				<ExperienceDescription>{exp.description}</ExperienceDescription>
			</ExperienceItem>
		))}
	</InfoContainer>
);

AboutCard.propTypes = {
	about: PropTypes.string.isRequired,
	bio: PropTypes.string.isRequired,
	experiences: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			period: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default AboutCard;
