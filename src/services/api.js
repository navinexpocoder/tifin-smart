import axios from "axios";

const API_BASE_URL = "/users/createUser";

const apiService = {
    deletePermissionById: async (userId) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/permission/${userId}`);
            return response.data;
        } catch (error) {
            throw error.response.data
        }
    },
    loginUser: async (loginData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, loginData);
            return response.data;
        } catch (error) {
            throw error.response.data
        }
    }
}
export default apiService
