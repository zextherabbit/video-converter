import { IVideo } from "../video/IVideo";
import { RowDataPacket, FieldPacket } from "mysql2/promise";

export interface IDatabase {

    Insert(video: IVideo): Promise<IDbResult>;
    GetAll(): Promise<IDbResult>;
    GetById(id: number | string): Promise<IDbResult>;
    UpdateById(video: IVideo): Promise<IDbResult>;
    DeleteById(video: IVideo): Promise<IDbResult>;

}

export type IDbResult = [RowDataPacket[], FieldPacket[]];