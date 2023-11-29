import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import router from './Router';
import { GlobalStyle } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/themes';
import ThemedToast from './components/ui/ThemedToast';
import { useEffect } from 'react';
import { fetchUser } from './store/slices/userSlice';

function App() {
	const theme = useSelector(state => state.theme.theme);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<ThemedToast />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
