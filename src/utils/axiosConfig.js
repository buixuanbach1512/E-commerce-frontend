import axios from 'axios';
let getToken = sessionStorage.getItem('customer') ? JSON.parse(sessionStorage.getItem('customer')) : { token: null };

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.headers.common = { Authorization: `Bearer ${getToken.token}` };
export default axios;
