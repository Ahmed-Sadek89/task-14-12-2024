export interface ExistedUser {
    email: string;
    password: string;
}

export interface User extends ExistedUser {
    fname: string;
    lname: string;
}