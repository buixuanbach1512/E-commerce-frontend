import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/api/';
const getAllCategory = async () => {
    const response = await axios.get(`category/`);
    if (response) {
        return response.data;
    }
};

export const categoryService = {
    getAllCategory,
};
