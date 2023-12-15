import { Title } from './SectionTitle.styled';
import PropTypes from 'prop-types';
export const SectionTitle = ({ title, size }) => {
	return <Title size={size}>{title}</Title>;
};

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['default', 'big']),
};

SectionTitle.defaultProps = {
	size: 'default',
};
