import styled from 'styled-components';

const StyledBox = styled.div`
	background-color: #f7fafc; /* Adjust for dark mode if needed */
	/* Add other styles as needed */
`;

const StyledContainer = styled.div`
	max-width: 7xl;
	padding: 4rem 0;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 3rem; /* Adjust as needed */
`;

const StyledStack = styled.div`
	display: flex;
	flex-direction: column; /* Adjust based on responsive design */
	gap: 1rem; /* Adjust as needed */

	@media (min-width: 768px) {
		flex-direction: row; /* For responsive design */
	}
`;

const StyledHeading = styled.h2`
	/* Add your heading styles */
`;

const StyledText = styled.p`
	/* Add your text styles */
`;

const StyledAvatar = styled.img`
	border-radius: 50%;
	/* Add other avatar styles */
`;

const TestimonialBox = styled.div`
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	padding: 2rem;
	border-radius: 1rem;
	/* Add other styles */
`;

const TestimonialHeading = styled.h3`
	font-size: 1.5rem; /* Adjust as needed */
	/* Add other styles */
`;

const TestimonialText = styled.p`
	color: #4a5568; /* Adjust for dark mode if needed */
	/* Add other styles */
`;
export {
	StyledBox,
	StyledContainer,
	StyledStack,
	StyledHeading,
	StyledText,
	StyledAvatar,
	TestimonialBox,
	TestimonialHeading,
	TestimonialText,
};
