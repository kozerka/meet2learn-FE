import { NavigationLink } from '../';
import { NavigationStyled } from './NavigationMenu.styled';
import PropTypes from 'prop-types';

export const NavigationMenu = ({ links }) => {
	return (
		<NavigationStyled>
			{links.map((link, index) => (
				<NavigationLink key={index} icon={link.icon} to={link.to}>
					{link.text}
				</NavigationLink>
			))}
		</NavigationStyled>
	);
};

NavigationMenu.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.elementType.isRequired,
			to: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
};
