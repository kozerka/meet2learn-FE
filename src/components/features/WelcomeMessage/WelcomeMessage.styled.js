import styled from 'styled-components';

export const MessageStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.6rem;
	p {
		text-align: center;
	}
	span {
		font-weight: bold;
		color: ${({ theme }) => theme.primary};
		padding: 0 0.3rem;
	}
`;
