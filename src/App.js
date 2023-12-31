import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import router from './Router';
import { GlobalStyle } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/themes';
import { ThemedToast } from './components/ui';
import { useSelector } from 'react-redux';

function App() {
	const theme = useSelector(state => state.theme.theme);

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<ThemedToast />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
