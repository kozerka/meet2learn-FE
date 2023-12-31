import { NavLinkStyled } from '../Link/Link.styled';
import { createElement } from 'react';
import PropTypes from 'prop-types';
export const NavigationLink = ({ icon, to, children }) => {
	return (
		<NavLinkStyled to={to}>
			{createElement(icon, { size: '1.5em', style: { marginRight: '0.5rem' } })}
			{children}
		</NavLinkStyled>
	);
};

NavigationLink.propTypes = {
	icon: PropTypes.elementType.isRequired,
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
