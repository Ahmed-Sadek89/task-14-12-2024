import Stars from "../components/ui/stars";
import useGetProducts from "../hook/use-get-products";

const Home = () => {
    const { products, isLoading, error } = useGetProducts()

    return (
        <div className="py-6 container">
            <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4 md:mb-8">
                {
                    isLoading && <p>Loading...</p>
                }
                {
                    error && <p>{error}</p>
                }
                {products && products.map(product => (
                    <div key={product.id} className="border-gray-700 bg-white shadow-xl p-6 border rounded-lg">
                        <div className="w-full h-56">
                            <img className="mx-auto h-full" src={product.imageDark} alt={product.name} />
                        </div>
                        <div className="pt-6">
                            <h4 className="font-semibold text-gray-900 text-lg hover:underline leading-tight">{product.name}</h4>
                            <div className="flex items-center gap-2 mt-2">
                                <Stars />
                                <p className="font-medium text-gray-900 text-sm">{product.rating}</p>
                                <p className="font-medium text-gray-500 text-sm">({product.reviews})</p>
                            </div>
                            <p className="mt-10 w-full font-extrabold text-2xl text-center text-gray-900 leading-tight">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
