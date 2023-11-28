import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';
const getAllCategory = async () => {
    const response = await axios.get(`${baseUrl}category/`);
    if (response) {
        return response.data;
    }
};

export const categoryService = {
    getAllCategory,
};
