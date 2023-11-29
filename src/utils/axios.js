import Axios from 'axios';

const axios = Axios.create({ withCredentials: true });

axios.defaults.withCredentials = true;

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error.response.status === 401) {
			localStorage.removeItem('user');
		}
		return Promise.reject(error);
	}
);

export default axios;
