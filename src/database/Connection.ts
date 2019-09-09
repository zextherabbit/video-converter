import * as MySQL from 'mysql2/promise';
import { IExecuteQuery } from './IExecuteQuery';
import { IDbResult } from './IDatabase';

export default class Connection implements IExecuteQuery {

    private _pool: MySQL.Pool;

    constructor(config: any) {
        this._pool = MySQL.createPool(config);
    }

    executeQuery(query: string, values?: any[]): Promise<IDbResult> {
        return this._pool.execute<MySQL.RowDataPacket[]>(query, values);
    }

}