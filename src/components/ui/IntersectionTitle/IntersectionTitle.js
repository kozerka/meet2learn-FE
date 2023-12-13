import PropTypes from 'prop-types';
import { Title, SubTitle, Content } from './IntersectionTitle.styled';
export const IntersectionTitle = ({ title, text }) => {
	return (
		<Content>
			<Title>{title}</Title>
			<SubTitle>{text}</SubTitle>
		</Content>
	);
};

IntersectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
