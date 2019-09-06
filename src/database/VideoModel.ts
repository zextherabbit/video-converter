import { IVideo } from "../video/IVideo";
import { IDatabase, IDbResult } from "./IDatabase";

export default class VideoModel {

    private _database: IDatabase;

    constructor(database: IDatabase){
        this._database = database;
    }

    InsertVideo(video: IVideo): Promise<IDbResult>{
        return this._database.Insert(video);
    }

    GetVideo(id: string | number): Promise<IDbResult>{
        return this._database.GetById(id);
    }

}