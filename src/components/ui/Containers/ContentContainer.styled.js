import styled from 'styled-components';

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex: 1;
	margin: 0 auto;
	gap: 4rem;
	margin-top: 8rem;

	@media (max-width: 1024px) {
		flex-direction: column;
		width: 60%;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;
