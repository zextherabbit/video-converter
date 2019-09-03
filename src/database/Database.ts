import { IDatabase } from "../interfaces/IDatabase";
import { IConnection } from "../interfaces/IConnection";
import { IVideo } from "../interfaces/IVideo";

export class Database implements IDatabase {

  private connection: IConnection;

  constructor(connection: IConnection){
    this.connection = connection;
  }

  InsertVideo(video: IVideo): Promise<any> {
    const query = "INSERT INTO Video (title, url) VALUES (?,?)";
    const values = [video.title, video.url];
    return this.connection.ExecuteQuery(query, values);
  }
  
} 