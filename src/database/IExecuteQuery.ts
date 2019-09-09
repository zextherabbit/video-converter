import { IDbResult } from "./IDatabase";

export interface IExecuteQuery {
    executeQuery(query: string, values?: any[]): Promise<IDbResult>;
}