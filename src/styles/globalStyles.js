import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

   body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  'Montserrat', 'Roboto',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
}
a, button {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.hover};
    }
   
  }
`;
