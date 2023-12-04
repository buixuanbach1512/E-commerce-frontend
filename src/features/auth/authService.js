import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';
import { config } from '../../utils/axiosConfig';

const register = async (userData) => {
    const response = await axios.post(`${baseUrl}user/register`, userData);
    if (response.data) {
        return response.data;
    }
};

const login = async (userData) => {
    const response = await axios.post(`${baseUrl}user/login`, userData, {
        withCredentials: true,
    });
    if (response.data) {
        sessionStorage.setItem('customer', JSON.stringify(response.data));
        return response.data;
    }
};

const getUserWishList = async () => {
    const response = await axios.get(`${baseUrl}user/wishlist`, config);
    if (response.data) {
        return response.data;
    }
};

const addToCart = async (cartData) => {
    const response = await axios.post(`${baseUrl}user/add-to-cart`, cartData, config);
    if (response.data) {
        return response.data;
    }
};

const getCart = async () => {
    const response = await axios.get(`${baseUrl}user/cart`, config);
    if (response.data) {
        return response.data;
    }
};

const removeProdCart = async (id) => {
    const response = await axios.delete(`${baseUrl}user/delete-cart/${id}`, config);
    if (response.data) {
        return response.data;
    }
};
const updateQuantityCart = async (cartData) => {
    const response = await axios.put(
        `${baseUrl}user/update-cart/${cartData.id}/${cartData.quantity}`,
        cartData,
        config,
    );
    if (response.data) {
        return response.data;
    }
};

const createOrder = async (orderData) => {
    const response = await axios.post(`${baseUrl}user/create-order/`, orderData, config);
    if (response.data) {
        return response.data;
    }
};

const emptyCart = async () => {
    const response = await axios.delete(`${baseUrl}user/empty-cart/`, config);
    if (response.data) {
        return response.data;
    }
};

const logout = async () => {
    const response = await axios.post(`${baseUrl}user/logout`);
    if (response.data) {
        return response.data;
    }
};

export const authService = {
    register,
    login,
    getUserWishList,
    addToCart,
    getCart,
    removeProdCart,
    updateQuantityCart,
    createOrder,
    emptyCart,
    logout,
};
