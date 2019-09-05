import { IInsertVideo } from "../interfaces";
import { IExecuteQuery } from "../interfaces";
import { IVideo } from "../interfaces";

export class Database implements IInsertVideo {

  private connection: IExecuteQuery;

  constructor(connection: IExecuteQuery){
    this.connection = connection;
  }

  InsertVideo(video: IVideo) {
    const query = "INSERT INTO Video (title, url) VALUES (?,?)";
    const values = [video.title, video.url];
    return this.connection.ExecuteQuery(query, values);
  }
  
} 