import axios from 'axios';

const ROOT_URL="http://localhost:3000";

const config = {
    headers: {'x-auth-token': 'Header-Value'}
};

export default {
    async login(email, password) {
        try{
            const response = await axios.post(`${ROOT_URL}/auth/login`, {email, password}, config);
            return response;
        } catch (e) {
            return 'No user found';
        }
    }
}
