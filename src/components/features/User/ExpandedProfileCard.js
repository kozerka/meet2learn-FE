import PropTypes from 'prop-types';
import {
	InfoContainer,
	Info,
	SectionLabel,
	SectionLabelSpan,
	About,
	ExperienceItem,
	ExperienceDescription,
	ExperiencesContainer,
	SubjectLabel,
} from './ExpandedProfileCard.styled';
const ExtendedProfileCard = ({ user }) => {
	return (
		<InfoContainer>
			<SectionLabel>
				<SectionLabelSpan>Age</SectionLabelSpan>
			</SectionLabel>
			{user.age ? (
				<div>
					<About>{user.age}</About>
				</div>
			) : (
				<About>User did not add info about age yet...</About>
			)}

			<SectionLabel>
				<SectionLabelSpan>City</SectionLabelSpan>
			</SectionLabel>
			<Info> {user.city}</Info>
			<SectionLabel>
				<SectionLabelSpan>Country</SectionLabelSpan>
			</SectionLabel>
			<Info> {user.country}</Info>
			<SectionLabel>
				<SectionLabelSpan>About</SectionLabelSpan>
			</SectionLabel>
			{user.about ? (
				<div>
					<About>{user.about}</About>
				</div>
			) : (
				<About>User did not add any info yet...</About>
			)}

			{user.role === 'tutor' && (
				<div>
					<SectionLabel>
						<SectionLabelSpan>Subjects</SectionLabelSpan>
					</SectionLabel>
					{user.subjects && user.subjects.length > 0 ? (
						user.subjects.map((subject, index) => (
							<SubjectLabel key={index}>
								{typeof subject === 'string' ? subject : subject.name}
							</SubjectLabel>
						))
					) : (
						<About>Empty</About>
					)}
					<SectionLabel>
						<SectionLabelSpan>Bio</SectionLabelSpan>
					</SectionLabel>
					{user.bio ? (
						<div>
							<About>{user.bio}</About>
						</div>
					) : (
						<About>Empty</About>
					)}

					<SectionLabel>
						<SectionLabelSpan>Experience</SectionLabelSpan>
					</SectionLabel>
					{user.experiences && user.experiences.length > 0 ? (
						<ExperiencesContainer>
							{user.experiences.map((exp, index) => (
								<ExperienceItem key={index}>
									<ExperienceDescription>{exp.description}</ExperienceDescription>
								</ExperienceItem>
							))}
						</ExperiencesContainer>
					) : (
						<About>Empty</About>
					)}
				</div>
			)}
		</InfoContainer>
	);
};

ExtendedProfileCard.propTypes = {
	user: PropTypes.shape({
		city: PropTypes.string,
		age: PropTypes.number,
		country: PropTypes.string,
		about: PropTypes.string,
		role: PropTypes.string.isRequired,
		bio: PropTypes.string,
		subjects: PropTypes.arrayOf(
			PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.shape({
					name: PropTypes.string,
				}),
			])
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
