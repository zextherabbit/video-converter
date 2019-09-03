import { IVideo } from "../interfaces/IVideo";
import { IDatabase } from "../interfaces/IDatabase";

export class VideoModel {

  private database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  public Insert(video: IVideo): Promise<any> {
    return this.database.InsertVideo(video);
  }

}