import { IVideo } from "../interfaces";
import { IInsertVideo } from "../interfaces";
import { IPromiseResult } from "promise-helper";

export class VideoModel {

  private database: IInsertVideo;

  constructor(database: IInsertVideo) {
    this.database = database;
  }

  public Insert(video: IVideo){
    return this.database.InsertVideo(video);
  }

}