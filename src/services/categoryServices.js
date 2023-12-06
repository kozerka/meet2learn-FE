import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const fetchCategories = () => {
	return axios.get(`${BASE_URL}/api/categories`).then(response => response.data);
};

export default fetchCategories;
