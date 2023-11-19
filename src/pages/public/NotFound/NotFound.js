import { useRouteError } from 'react-router-dom';
import erroronpage from '../../../assets/img/erroronpage.png';
import Button from '../../../components/ui/Button';
import {
	ErrorNumber,
	StyledHeading,
	StyledImage,
	StyledLink,
	StyledNotFoundContainer,
	StyledParagraph,
	Wrapper,
} from './NotFound.styled';

const NotFound = () => {
	const error = useRouteError();

	if (error.status === 404) {
		return (
			<Wrapper>
				<StyledNotFoundContainer>
					<StyledImage src={erroronpage} alt={'Error on page'} />
					<ErrorNumber>404</ErrorNumber>
					<StyledHeading>Oops! Page not found!</StyledHeading>
					<StyledParagraph>We can&apos;t find the page you are looking for...</StyledParagraph>
					<Button $primary={true}>
						<StyledLink to={'/'}>Back Home</StyledLink>
					</Button>
				</StyledNotFoundContainer>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<StyledNotFoundContainer>
				<StyledHeading>Something went wrong and an error occurred</StyledHeading>
			</StyledNotFoundContainer>
		</Wrapper>
	);
};

export default NotFound;
