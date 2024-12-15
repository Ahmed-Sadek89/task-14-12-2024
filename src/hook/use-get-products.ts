import { useEffect, useState } from 'react'
import { Product } from '../types'
import useFormLoading from './use-loading'
import { getProducts } from '../api/product/products'

const useGetProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState<string>('')
    const { isLoading, handleLoading } = useFormLoading()
    useEffect(() => {
        const getProduct = async () => {
            handleLoading(true)
            await getProducts()
                .then(res => setProducts(res || []))
                .catch(error => setError(error))
                .finally(() => handleLoading(false))
        }
        getProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return { products, isLoading, error }
}

export default useGetProducts
