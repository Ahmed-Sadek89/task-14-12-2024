import { User } from "../../types";
import { getUserByEmail } from "./get-user-by-email";
import { axiosInstance, handleAxiosError } from "../../utils/axios";

export const register = async (user: User) => {
    try {
        const existingUser = await getUserByEmail(user.email);

        if (existingUser) {
            throw new Error('Email already exists');
        }

        const response = await axiosInstance.post('/users', user);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'Failed to fetch user by email')
    }
};
