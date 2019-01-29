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
    },
    async deleteUser(userId){
        try {
            const response = await axios.delete(`${ROOT_URL}/user/${userId}`, {
                data: {token: window.localStorage.getItem('webtoken')}
            });
            console.log(response)
        } catch (e) {
            return 'Something went wrong'
        }
    }
}
