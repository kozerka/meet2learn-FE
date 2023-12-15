import styled from 'styled-components';
export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 1200px;
	gap: 3rem;
	@media (min-width: 992px) {
		flex-direction: row;
	}
`;
