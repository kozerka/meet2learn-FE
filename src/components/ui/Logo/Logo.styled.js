import styled from 'styled-components';

const StyledLogo = styled.div`
	color: ${({ theme }) => theme.text};
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	line-height: 5rem;
	margin-left: 1.5rem;
	font-weight: bold;
	text-decoration: none;
	span {
		color: ${({ theme }) => theme.primary};
		font-size: 2.5rem;
	}
`;

export default StyledLogo;
