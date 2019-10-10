import IReadVideos from "../Controllers/IReadVideos";
import { readdirSync, existsSync } from "fs";

export default class VideoFileReader implements IReadVideos {

  private videosLocation: string;

  constructor(videosLocation: string) {
    this.videosLocation = videosLocation;
  }

  public readVideos() {
    if (!existsSync(this.videosLocation)) throw new Error('Invalid video directory path');
    const vids_dir = readdirSync(this.videosLocation);
    return vids_dir;
  }

  public getVideosPath(){
    return this.videosLocation;
  }

}