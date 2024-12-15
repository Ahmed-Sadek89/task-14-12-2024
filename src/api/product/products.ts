import Cookies from "universal-cookie";
import { Product } from "../../types";
import { axiosInstance, handleAxiosError } from "../../utils/axios";

export const getProducts = async (): Promise<Product[] | undefined> => {
    const cookie = new Cookies()
    try {
        const response = await axiosInstance.get('/products');
        if (response.data.length === 0) {
            throw new Error("No products found!")
        }
        if (cookie.get('test-auth') === '') {
            throw new Error("You are not auth")
        }
        
        return response.data
    } catch (error) {
        handleAxiosError(error, 'Error fetching products')
    }
};