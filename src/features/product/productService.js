import axios from '../../utils/axiosConfig';

const getAllProduct = async (queryData) => {
    const response = await axios.get(`product?${queryData ? `category=${queryData}` : ''}`);
    return response.data;
};

const getAProduct = async (prodId) => {
    const response = await axios.get(`product/${prodId}`);
    return response.data;
};

const addToWishList = async (prodId) => {
    const response = await axios.put(`product/wishlist`, { prodId });
    return response.data;
};

const rating = async (data) => {
    const response = await axios.put(`product/rating`, data);
    return response.data;
};

export const productService = {
    getAllProduct,
    getAProduct,
    addToWishList,
    rating,
};
