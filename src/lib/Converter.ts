import { IConverter } from "../interfaces/IConverter";
import { exec } from "child_process";
import { IVideo } from "../interfaces/IVideo";

//command : -movflags faststart -profile:v baseline -level 3.1

export class Converter implements IConverter {

  private storagePath: string;
  private ffmpegPath: string;
  private command: string;
  private extension: string;

  constructor(ffmpegPath: string, command: string, storagePath: string, extension: string) {
    this.ffmpegPath = ffmpegPath;
    this.command = command;
    this.storagePath = storagePath;
    this.extension = extension;
  }

  private CreateCommand(title: string) {
    return this.ffmpegPath + ` -i ${title} ${this.command} ${title}.${this.extension}`;
  }

  public Convert(video: IVideo): Promise<{ result: any; error: NodeJS.ErrnoException | null; }> {
    return new Promise((resolve, reject) => {
      exec(this.CreateCommand(video.title), { cwd: this.storagePath }, (error, stdout, stderr) => {
        if (error) reject({ result: null, error: stderr });
        resolve({ result: stdout, error: null });
      });
    })
  }

}