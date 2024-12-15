import axios from 'axios';
import { BASE_URL } from '../static/env';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const handleAxiosError = (error:unknown, message: string) => {
    if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || message);
    } else if (error instanceof Error) {
        console.error("General error:", error.message);
        throw new Error(error.message);
    } else {
        console.error("Unexpected error:", error);
        throw new Error('An unexpected error occurred');
    }
}