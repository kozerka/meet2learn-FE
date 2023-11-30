import styled from 'styled-components';
export const NavigationStyled = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;

	@media (max-width: 992px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;
