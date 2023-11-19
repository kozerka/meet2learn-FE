import { StyledButton } from './Button.styled';
import Proptypes from 'prop-types';

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
	children: Proptypes.node,
	onClick: Proptypes.func,
	$disabled: Proptypes.bool,
	$primary: Proptypes.bool,
	$secondary: Proptypes.bool,
	$fullWidth: Proptypes.bool,
	type: Proptypes.string,
};
export default Button;
