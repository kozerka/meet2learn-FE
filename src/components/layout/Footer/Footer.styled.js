import styled from 'styled-components';

const StyledFooter = styled.footer`
	height: 8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
	font-size: 1rem;
`;

const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	text-align: center;
	display: flex;
	align-items: center;
	padding: 0 2rem;

	a {
		display: inline-flex;
		align-items: center;
		margin-left: 0.5rem;

		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;
export { StyledFooter, FooterContent };
