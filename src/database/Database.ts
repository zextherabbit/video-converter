import { IDatabase, IDbResult } from "./IDatabase";
import { IExecuteQuery } from "./IExecuteQuery";
import { IVideo } from "../video/IVideo";

export default class Database implements IDatabase {
    
    private _connection: IExecuteQuery;

    constructor(connection: IExecuteQuery){
        this._connection = connection;
    }

    Insert(video: IVideo): Promise<IDbResult>{
        const query = `INSERT INTO Video (title, url) VALUES (?,?)`;
        const values = [video.title, video.url];
        return this._connection.executeQuery(query, values);
    }    

    GetById(id: number | string): Promise<IDbResult>{
        const query = `SELECT * FROM Video WHERE id = ?`;
        const values = [id];
        return this._connection.executeQuery(query, values);
    }

    GetAll(): Promise<IDbResult> {
        throw new Error("Method not implemented.");
    }

    UpdateById(video: IVideo): Promise<IDbResult>{
        throw new Error("Method not implemented.");
    }

    DeleteById(video: IVideo): Promise<IDbResult> {
        throw new Error("Method not implemented.");
    }


}