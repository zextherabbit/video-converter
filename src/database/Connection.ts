import * as MySQL from 'mysql2/promise';
import { IExecuteQuery } from './IExecuteQuery';
import { IDbResult } from './IDatabase';
import { RowDataPacket } from 'mysql2/promise';

export default class Connection implements IExecuteQuery {

    private _pool: MySQL.Pool;

    constructor(config: any){
        this._pool = MySQL.createPool(config);
    }

    executeQuery(args: any[]): Promise<IDbResult> {
        if(typeof args[0] === 'string' && args[1])
            return this._pool.execute<RowDataPacket[]>(args[0], args[1]);
        throw new Error('Invalid parameters, requiered query and values');
    }
    
}