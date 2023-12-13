import PropTypes from 'prop-types';
import {
	InfoContainer,
	SectionLabel,
	SectionLabelSpan,
	About,
	Bio,
	ExperienceItem,
	ExperienceDescription,
} from './About.styled';
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
				<ExperienceDescription>{exp.description}</ExperienceDescription>
			</ExperienceItem>
		))}
	</InfoContainer>
);

AboutCard.propTypes = {
	about: PropTypes.string,
	bio: PropTypes.string,
	experiences: PropTypes.arrayOf(
		PropTypes.shape({
			description: PropTypes.string.isRequired,
		})
	),
};

export default AboutCard;
