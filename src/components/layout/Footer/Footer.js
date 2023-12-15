import { BsGithub } from 'react-icons/bs';
import { StyledFooter, FooterContent } from './Footer.styled';
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
