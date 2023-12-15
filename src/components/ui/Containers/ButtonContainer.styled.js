import styled from 'styled-components';
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem;
	gap: 2rem;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		button {
			font-size: 1rem;
			padding: 1rem 1.2rem;
			width: 100%;
			min-width: 180px;
		}
	}
`;
