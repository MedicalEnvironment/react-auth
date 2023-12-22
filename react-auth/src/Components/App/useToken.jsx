import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useToken = () => {
    const getToken = () => {
        const token = Cookies.get('token');
        return token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        Cookies.set('token', userToken, { expires: 7 }); // Set the cookie to expire in 7 days
        setToken(userToken);
    };

    const removeToken = () => {
        Cookies.remove('token');
        setToken(null);
    };

    useEffect(() => {
        const token = getToken();
        if (token) {
            setToken(token);
        }
    }, []);

    return {
        setToken: saveToken,
        removeToken,
        token,
    };
};

export default useToken;
