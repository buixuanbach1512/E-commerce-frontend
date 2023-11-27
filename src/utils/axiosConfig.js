const getToken = sessionStorage.getItem('customer') ? JSON.parse(sessionStorage.getItem('customer')) : { token: null };

export const config = {
    headers: {
        Authorization: `Bearer ${getToken.token}`,
        Accept: 'application/json',
    },
};
