import { Title } from './SectionTitle.styled';
import PropTypes from 'prop-types';
const SectionTitle = ({ title, size }) => {
	return <Title size={size}>{title}</Title>;
};

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['default', 'big']),
};

SectionTitle.defaultProps = {
	size: 'default',
};
export default SectionTitle;
