import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';
import { config } from '../../utils/axiosConfig';

const register = async (userData) => {
    const reponse = await axios.post(`${baseUrl}user/register`, userData);
    return reponse.data;
};

const login = async (userData) => {
    const reponse = await axios.post(`${baseUrl}user/login`, userData);
    if (reponse.data) {
        sessionStorage.setItem('customer', JSON.stringify(reponse.data));
    }
    return reponse.data;
};

const getUserWishList = async () => {
    const reponse = await axios.get(`${baseUrl}user/wishlist`, config);
    return reponse.data;
};

const logout = async () => {
    const reponse = await axios.get(`${baseUrl}user/logout`);
    return reponse.data;
};

export const authService = {
    register,
    login,
    getUserWishList,
    logout,
};
