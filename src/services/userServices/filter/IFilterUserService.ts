import { FindOperator } from "typeorm";

export interface IFilterUserRequest {
    name?: any;
    cpf?: any;
    email?: any;
    rg?: any;
    active?: any;
    type?: any;
}

export interface IFilterUserParamsRequest {
    name?: FindOperator<string>;
    cpf?: string;
    email?: string;
    rg?: string;
    active?: string | boolean;
    type?: number;
}