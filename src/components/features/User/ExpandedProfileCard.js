import PropTypes from 'prop-types';
import {
	InfoContainer,
	Info,
	SectionLabel,
	SectionLabelSpan,
	About,
	ExperienceItem,
	ExperienceTitle,
	ExperiencePeriod,
	ExperienceDescription,
} from './ExpandedProfileCard.styled';
const ExtendedProfileCard = ({ user }) => {
	return (
		<InfoContainer>
			<Info>City: {user.city}</Info>
			<Info>Country: {user.country}</Info>
			{user.about && (
				<div>
					<SectionLabel>
						<SectionLabelSpan>About</SectionLabelSpan>
					</SectionLabel>
					<About>{user.about}</About>
				</div>
			)}

			{user.role === 'tutor' && (
				<div>
					{user.subjects && (
						<div>
							<SectionLabel>
								<SectionLabelSpan>Subjects</SectionLabelSpan>
							</SectionLabel>
							{user.subjects.map((subject, index) => (
								<Info key={index}>{subject.name}</Info>
							))}
						</div>
					)}
					{user.experiences && user.experiences.length > 0 && (
						<div>
							<SectionLabel>
								<SectionLabelSpan>Experience</SectionLabelSpan>
							</SectionLabel>
							{user.experiences.map((exp, index) => (
								<ExperienceItem key={index}>
									<ExperienceTitle>{exp.name}</ExperienceTitle>
									<ExperiencePeriod>{exp.period}</ExperiencePeriod>
									<ExperienceDescription>{exp.description}</ExperienceDescription>
								</ExperienceItem>
							))}
						</div>
					)}
				</div>
			)}
		</InfoContainer>
	);
};

ExtendedProfileCard.propTypes = {
	user: PropTypes.shape({
		city: PropTypes.string,
		country: PropTypes.string,
		about: PropTypes.string,
		role: PropTypes.string.isRequired,
		subjects: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		),
		experiences: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				period: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
			})
		),
	}).isRequired,
};

export default ExtendedProfileCard;
