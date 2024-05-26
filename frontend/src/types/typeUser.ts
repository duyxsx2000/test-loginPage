export type LoginData = {
    account: string,
    password: string
};

export type User = {
    name: string,
    account: string,
    password: string
};

export type ActionType = any;

export type ResponseData = {
    user: User 
    token: string
    message: string;
}
