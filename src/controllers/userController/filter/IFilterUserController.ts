export interface IQueryRequest {
    name: string;
    cnpj: string;
    tradingName: string; 
    managerName: string;
    corporativeEmail: string;
    active: 0 | 1;
}