import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			state.userInfo = action.payload;
			localStorage.setItem('userInfo', JSON.stringify(action.payload));
		},
		clearUserInfo: state => {
			state.userInfo = null;
			localStorage.removeItem('userInfo');
		},
	},
});

export const { setUserInfo, clearUserInfo } = authSlice.actions;
export default authSlice.reducer;
