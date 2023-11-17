import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import router from './Router';
import { GlobalStyle } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/themes';

function App() {
	const theme = useSelector(state => state.theme.theme);
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
