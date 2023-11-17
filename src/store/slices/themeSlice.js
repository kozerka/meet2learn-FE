// features/theme/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: localStorage.getItem('theme') || 'light',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			const newTheme = state.theme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			state.theme = newTheme;
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
