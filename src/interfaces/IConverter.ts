import { IVideo } from "../interfaces/IVideo";

export interface IConverter {
  Convert(video: IVideo): Promise<{ result: any, error: NodeJS.ErrnoException | null}>;
}