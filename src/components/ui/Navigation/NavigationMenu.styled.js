import styled from 'styled-components';
export const NavigationStyled = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 10px;

	@media (min-width: 992px) {
		flex-direction: row;
	}
`;
