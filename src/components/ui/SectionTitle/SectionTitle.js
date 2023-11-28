import { Title } from './SectionTitle.styled';
import PropTypes from 'prop-types';
const SectionTitle = ({ title }) => {
	return <Title>{title}</Title>;
};

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
};
export default SectionTitle;
