export default interface IConvert {
  convertVideo(videoPath: string, videoTitle: string, videoExtension: string, toExtension: string, convertedPath: string, codecCommand: string, codecLocation: string, newVideoTitle: string): Promise<{ result: any, error: Error | null }>;
}