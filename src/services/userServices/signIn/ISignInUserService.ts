export interface ISignInUserRequest {
    email: string;
    password: string;
};

export interface ISignInUserService {
    execute({ email, password }: ISignInUserRequest): Promise<any>;
};