import Stars from "../components/ui/stars";

const products = [
    {
        id: 1,
        name: "Apple iMac 27\", 1TB HDD, Retina 5K Display, M3 Max",
        imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg",
        rating: 5.0,
        reviews: 455,
        price: "$1,699"
    },
    {
        id: 2,
        name: "Apple iPhone 15 Pro Max, 256GB, Blue Titanium",
        imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg",
        rating: 4.9,
        reviews: 1233,
        price: "$1,199"
    },
    {
        id: 3,
        name: "iPad Pro 13-Inch (M4): XDR Display, 512GB",
        imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg",
        rating: 4.9,
        reviews: 879,
        price: "$799"
    },
    {
        id: 4,
        name: "PlayStation®5 Console – 1TB, PRO Controller",
        imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg",
        rating: 4.8,
        reviews: 2957,
        price: "$499"
    },
    {
        id: 5,
        name: "Microsoft Xbox Series X 1TB Gaming Console",
        imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg",
        rating: 4.8,
        reviews: 4263,
        price: "$499"
    },
    {
        id: 6,
        name: "Apple MacBook PRO Laptop with M2 chip",
        imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg",
        rating: 4.9,
        reviews: 1076,
        price: "$2,599"
    },
    {
        id: 7,
        name: "Apple Watch SE [GPS 40mm], Smartwatch",
        imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg",
        rating: 4.7,
        reviews: 387,
        price: "$699"
    },
    {
        id: 8,
        name: "Microsoft Surface Pro, Copilot+ PC, 13 Inch",
        imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg",
        rating: 4.9,
        reviews: 4775,
        price: "$899"
    }
];

const Home = () => {
    return (
        <div className="py-6 container">
            <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4 md:mb-8">
                {products.map(product => (
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
