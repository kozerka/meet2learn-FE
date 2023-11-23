import styled from 'styled-components';
export const StyledIcon = styled.p`
	color: ${({ theme }) => theme.secondary};
	width: 3px;
	font-size: 1rem;
	position: absolute;
	top: 2.7rem;
	left: 1rem;
`;

export const StyledIconForPasswordVisibility = styled.p`
	position: absolute;
	color: ${({ theme }) => theme.secondary};
	position: absolute;
	top: 2.7rem;
	right: 1.6rem;
	width: 3px;

	cursor: pointer;
`;
