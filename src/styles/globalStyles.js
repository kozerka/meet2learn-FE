import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

   body {
    
  font-family: 'Rubik', 'Open Sans','Gluten', 'Grandstander', 'Itim',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
}
a, button {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.hover};
    }
   
  }
`;
