import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';
const getAllColor = async () => {
    const response = await axios.get(`${baseUrl}color/`);
    if (response) {
        return response.data;
    }
};

export const colorService = {
    getAllColor,
};
