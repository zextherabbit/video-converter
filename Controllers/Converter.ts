import IConverter from "./IConvert";
import { spawn, ChildProcess } from "child_process";

export default class Converter implements IConverter {

  private timeOut: number;

  constructor(timeOut: number) {
    this.timeOut = timeOut;
  }

  private createCommand(videoTitle: string, videoExtension: string, command: string, convertedPath: string, newTitle: string, newExtension: string) {
    return `-i ${videoTitle}${videoExtension} ${command} ${convertedPath}/${newTitle}${newExtension}`;
  }

  private TimeOut(child: ChildProcess){
    return setTimeout(()=>{
      child.emit("error", new Error("Timeout"));
    }, this.timeOut);
  }

  public convertVideo(videoPath: string, videoTitle: string, videoExtension: string, toExtension: string, convertedPath: string, codecCommand: string, codecLocation: string, newVideoTitle: string): Promise<{ status: string, video: string }> {

    const fullCommand = this.createCommand(videoTitle, videoExtension, codecCommand, convertedPath, newVideoTitle, toExtension);
    return new Promise((resolve, reject) => {
      let child = spawn(codecLocation, fullCommand.split(' '),{ cwd: videoPath })
      child.on("error", (error) => {
        child.kill();
        reject(error);
      })
      child.on("close", () => {
        resolve({ status: "Done", video: videoTitle });
        clearTimeout(this.TimeOut(child));
      })
      this.TimeOut(child);
    });

  }

}