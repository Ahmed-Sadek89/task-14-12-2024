export interface ExistedUser {
    email: string;
    password: string;
}

export interface User extends ExistedUser {
    fname: string;
    lname: string;
}

export interface Product {
    id: number,
    name: string,
    imageDark: string,
    rating: number,
    reviews: number,
    price: string
}