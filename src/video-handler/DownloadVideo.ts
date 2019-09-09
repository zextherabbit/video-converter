import { IVideo } from "../video/IVideo";
import { createWriteStream } from "fs";
import * as fetch from "node-fetch";

export class DownloadVideo {

  private _path: string;

  constructor(path: string) {
    this._path = path;
  }

  public async DownloadVideo(video: IVideo): Promise<string> {

    let result!: Promise<string>;

    try {
      
      const res = await fetch.default(video.url);
      const fileStream = createWriteStream(this._path);
      
      result = new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on('error', (err) => {
          reject(err);
        });
        res.body.on('finish', () => {
          resolve('Video Downloaded');
        });
      })

    } catch (error) {
      return error;
    }

    return result;

  }

}