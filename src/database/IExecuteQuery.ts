import { IDbResult } from "./IDatabase";

export interface IExecuteQuery {
    executeQuery(args: any[]): Promise<IDbResult>;    
}