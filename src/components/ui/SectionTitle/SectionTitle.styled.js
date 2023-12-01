import styled from 'styled-components';

export const Title = styled.h3`
	align-self: center;
	margin: 1rem 0;
	border-bottom: 4px solid ${({ theme }) => theme.primary};
	font-size: ${({ size }) => (size === 'big' ? '1.5rem' : '1.3rem')};
`;
