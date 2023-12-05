import axios from '../../utils/axiosConfig';

const register = async (userData) => {
    const response = await axios.post(`user/register`, userData);
    if (response.data) {
        return response.data;
    }
};

const login = async (userData) => {
    const response = await axios.post(`user/login`, userData, {
        withCredentials: true,
    });
    if (response.data) {
        sessionStorage.setItem('customer', JSON.stringify(response.data));
        return response.data;
    }
};

const getUserWishList = async () => {
    const response = await axios.get(`user/wishlist`);
    if (response.data) {
        return response.data;
    }
};

const addToCart = async (cartData) => {
    const response = await axios.post(`user/add-to-cart`, cartData);
    if (response.data) {
        return response.data;
    }
};

const getCart = async () => {
    const response = await axios.get(`user/cart`);
    if (response.data) {
        return response.data;
    }
};

const removeProdCart = async (id) => {
    const response = await axios.delete(`user/delete-cart/${id}`);
    if (response.data) {
        return response.data;
    }
};
const updateQuantityCart = async (cartData) => {
    const response = await axios.put(`user/update-cart/${cartData.id}/${cartData.quantity}`);
    if (response.data) {
        return response.data;
    }
};

const createOrder = async (orderData) => {
    const response = await axios.post(`user/create-order/`, orderData);
    if (response.data) {
        return response.data;
    }
};

const emptyCart = async () => {
    const response = await axios.delete(`user/empty-cart/`);
    if (response.data) {
        return response.data;
    }
};

const userOrder = async () => {
    const response = await axios.get(`user/order`);
    if (response.data) {
        return response.data;
    }
};

const logout = async () => {
    const response = await axios.post(`user/logout`);
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
    userOrder,
    logout,
};
