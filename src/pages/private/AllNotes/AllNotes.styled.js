import styled from 'styled-components';
export const NotesGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	margin: 2rem auto;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
