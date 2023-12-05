import axios from '../../utils/axiosConfig';

const getAllProduct = async () => {
    const response = await axios.get(`product/`);
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

export const productService = {
    getAllProduct,
    getAProduct,
    addToWishList,
};
