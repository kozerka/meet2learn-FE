import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({
	children,
	onClick,
	$disabled,
	$primary,
	$secondary,
	$fullWidth,
	type = 'button',
	...rest
}) => {
	return (
		<StyledButton
			onClick={onClick}
			disabled={$disabled}
			$primary={$primary}
			$secondary={$secondary}
			$fullWidth={$fullWidth}
			type={type}
			{...rest}
		>
			{children}
		</StyledButton>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	$disabled: PropTypes.bool,
	$primary: PropTypes.bool,
	$secondary: PropTypes.bool,
	$fullWidth: PropTypes.bool,
	type: PropTypes.string,
	onClick: PropTypes.func,
};
export default Button;
