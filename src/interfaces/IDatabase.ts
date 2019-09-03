import { IVideo } from "./IVideo";

export interface IDatabase {
  InsertVideo(vide: IVideo): Promise<any>;
}