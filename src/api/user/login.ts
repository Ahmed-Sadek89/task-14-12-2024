import { ExistedUser, User } from "../../types";
import { getUserByEmail } from "./get-user-by-email";
import { handleAxiosError } from "../../utils/axios";

export const login = async (user: ExistedUser) => {
    try {
        const existingUser: User | undefined = await getUserByEmail(user.email);
        if (existingUser && existingUser.password === user.password) {
            return existingUser;
        }

        throw new Error("Invalid email or password");

    } catch (error) {
        handleAxiosError(error, 'Invalid email or password')
    }
};
