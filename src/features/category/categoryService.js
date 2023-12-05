import axios from '../../utils/axiosConfig';
const getAllCategory = async () => {
    const response = await axios.get(`category/`);
    if (response) {
        return response.data;
    }
};

export const categoryService = {
    getAllCategory,
};
