import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';
import { config } from '../../utils/axiosConfig';

const register = async (userData) => {
    const reponse = await axios.post(`${baseUrl}user/register`, userData);
    if (reponse.data) {
        return reponse.data;
    }
};

const login = async (userData) => {
    const reponse = await axios.post(`${baseUrl}user/login`, userData, {
        withCredentials: true,
    });
    if (reponse.data) {
        sessionStorage.setItem('customer', JSON.stringify(reponse.data));
        return reponse.data;
    }
};

const getUserWishList = async () => {
    const reponse = await axios.get(`${baseUrl}user/wishlist`, config);
    if (reponse.data) {
        return reponse.data;
    }
};

const addToCart = async (cartData) => {
    const reponse = await axios.post(`${baseUrl}user/add-to-cart`, cartData, config);
    if (reponse.data) {
        return reponse.data;
    }
};

const getCart = async () => {
    const reponse = await axios.get(`${baseUrl}user/cart`, config);
    if (reponse.data) {
        return reponse.data;
    }
};

const logout = async () => {
    const reponse = await axios.get(`${baseUrl}user/logout`);
    if (reponse.data) {
        return reponse.data;
    }
};

export const authService = {
    register,
    login,
    getUserWishList,
    addToCart,
    getCart,
    logout,
};
