import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const StarInput = styled.input`
	display: none;
	cursor: pointer;
	size: 30px;
`;

export const StarRatingContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-top: 2rem;
	margin-bottom: 1rem;
`;

export const StyledStar = styled(FaStar)`
	cursor: pointer;

	:hover {
		color: #ffc107;
	}
`;
