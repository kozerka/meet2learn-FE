import styled from 'styled-components';

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	margin: 0 auto;
	gap: 4rem;
	margin-top: 8rem;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;
