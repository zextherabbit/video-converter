import { exec } from "child_process";
import { IVideo } from "../video/IVideo";

//example command options: -movflags faststart -profile:v baseline -level 3.1

export class Converter {

  private storagePath: string;
  private ffmpegPath: string;
  private options: string;
  private extension: string;

  constructor(ffmpegPath: string, options: string, storagePath: string, extension: string) {
    this.ffmpegPath = ffmpegPath;
    this.options = options;
    this.storagePath = storagePath;
    this.extension = extension;
  }

  private CreateCommand(title: string) {
    return this.ffmpegPath + ` -i ${title} ${this.options} ${title}.${this.extension}`;
  }

  public ConvertVideo(video: IVideo): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(this.CreateCommand(video.title), { timeout: 100000, cwd: this.storagePath, killSignal: "SIGTERM" }, (error, stdout, stderr) => {
        if (error) reject(stderr);
        resolve(stdout);
      });
    })
  }

}