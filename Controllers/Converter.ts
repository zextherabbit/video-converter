import IConverter from "./IConvert";
import { exec, ExecException } from "child_process";

export default class Converter implements IConverter {

  private timeOut: number;

  constructor(timeOut: number){
    this.timeOut = timeOut;
  }

  private createCommand(codecPath: string, videoTitle: string, videoExtension: string, command: string, convertedPath: string, newTitle: string, newExtension: string){
    return `${codecPath} -i ${videoTitle}${videoExtension} ${command} ${convertedPath}/${newTitle}${newExtension}`;
  }

  public convertVideo(videoPath: string, videoTitle: string, videoExtension: string, toExtension: string, convertedPath: string, codecCommand: string, codecLocation: string, newVideoTitle: string): Promise<{ result: any; error: Error | null; }> {
    
    const fullCommand = this.createCommand(codecLocation, videoTitle, videoExtension, codecCommand, convertedPath, newVideoTitle, toExtension);

    return new Promise((resolve, reject) => {
      exec(fullCommand, { timeout: this.timeOut, cwd: videoPath, killSignal: "SIGTERM" }, (error: ExecException | null, stdout: string, stderr: string) => {
        if(error) reject({ result: null, error });
        resolve({ result: stdout, error: null });
      })
    });

  }
  
}