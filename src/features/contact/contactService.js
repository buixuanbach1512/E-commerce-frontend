import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';

const postContact = async (dataPost) => {
    const response = await axios.post(`${baseUrl}contact/`, dataPost);
    return response.data;
};

export const contactService = {
    postContact,
};
