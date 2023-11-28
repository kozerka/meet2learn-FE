import styled from 'styled-components';
export const SectionContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 1200px;
	gap: 3rem;
	@media (max-width: 992px) {
		flex-direction: column;
	}
`;
