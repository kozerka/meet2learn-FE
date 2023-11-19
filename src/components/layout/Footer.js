import { BsGithub } from 'react-icons/bs';
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

const Footer = () => {
	const copyright = String.fromCodePoint(0x00a9);
	const currentYear = new Date().getFullYear();
	return (
		<StyledFooter>
			<FooterContent>
				<p>
					{' '}
					Copyright {copyright} {currentYear} All rights reserved This template is made with
					<a href={'https://github.com/kozerka'} target={'_blank'} rel={'noreferrer'}>
						<BsGithub /> kozerka
					</a>
				</p>
			</FooterContent>
		</StyledFooter>
	);
};

export default Footer;
