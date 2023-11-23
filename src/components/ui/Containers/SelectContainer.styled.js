import styled from 'styled-components';
export const SelectContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin: 0.5rem auto 1rem auto;
	width: 100%;
	min-width: 320px;
	width: 100%;

	label {
		margin-bottom: 0.5rem;
		font-size: 0.7rem;
		width: 100%;
		font-weight: 700;
	}

	select {
		width: 100%;
		padding: 1rem;
		border-radius: 0.5rem;
		border: none;
		background-color: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
	}
`;
