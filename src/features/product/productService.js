import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';
import { config } from '../../utils/axiosConfig';

const getAllProduct = async () => {
    const response = await axios.get(`${baseUrl}product/`);
    return response.data;
};

const addToWishList = async (prodId) => {
    const response = await axios.put(`${baseUrl}product/wishlist`, { prodId }, config);
    return response.data;
};

export const productService = {
    getAllProduct,
    addToWishList,
};
