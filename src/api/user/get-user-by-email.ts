import { axiosInstance, handleAxiosError } from "../../utils/axios";

export const getUserByEmail = async (email: string) => {
    try {
        const response = await axiosInstance.get('/users', {
            params: { email },
        });

        if (response.data.length > 0) {
            return response.data[0];
        }

        return null;
    } catch (error) {
        handleAxiosError(error, 'Error fetching user by email')
    }
};
