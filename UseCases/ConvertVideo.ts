import IConvert from "../Controllers/IConvert";
import Video from "../Entities/Video";

export default class Converter {

  private convertPath: string;
  private command: string;
  private codecPath: string;
  private toExtension: string;
  private videoConverter: IConvert;

  constructor(convertPath: string, command: string, codecPath: string, toExtension: string, videoConverter: IConvert){

    this.convertPath = convertPath;
    this.command = command;
    this.codecPath = codecPath;
    this.toExtension = toExtension;
    this.videoConverter = videoConverter;

  }

  public convertVideo(videoLocation: string, videoTitle: string, videoExtension: string, newTitle: string){
    return this.videoConverter.convertVideo(videoLocation, videoTitle, videoExtension, this.toExtension, this.convertPath, this.command, this.codecPath, newTitle);
  }

}