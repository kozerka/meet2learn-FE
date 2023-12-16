import StyledLogo from './Logo.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Logo = ({ isLink, linkTo }) => {
	return isLink ? (
		<Link to={linkTo}>
			<StyledLogo>
				meet<span>2</span>learn
			</StyledLogo>
		</Link>
	) : (
		<StyledLogo>
			meet<span>2</span>learn
		</StyledLogo>
	);
};

Logo.propTypes = {
	isLink: PropTypes.bool,
	linkTo: PropTypes.string,
};

Logo.defaultProps = {
	isLink: true,
	linkTo: '/',
};
