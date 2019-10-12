import Converter from "./Controllers/Converter";
import ConvertVideo from "./UseCases/ConvertVideo";
import VideoFileReader from "./Controllers/VideoFileReader";
import VideoReader from "./UseCases/ReadVideosFromFile";
import config from "./config.json";
import { Queue, Handler, WrappedPromise } from "promise-helper";
import { logErrors, logFile } from "./Logger";

const converter = new Converter(20 * 60 * 1000);
const video_converter = new ConvertVideo(config.video_config.converted_folder, config.ffmpeg_config.command, config.ffmpeg_config.path, config.general.extension, converter);
const video_file_reader = new VideoFileReader(config.video_config.video_location);
const video_reader = new VideoReader(video_file_reader);

const queue = new Queue(config.general.video_limit);

function logOut() {
  process.stdout.write(`
      Tasks completed: ${queue.CompletedCount}
      Tasks remaining: ${queue.QueueCount}
      Tasks faield   : ${queue.FailedCount}
   `);
}

const resolvedHandler: Handler<string> = ({ promise, resolved }): void => {
  if (resolved.result) {
    logOut();
    logFile(resolved.result, config.logs.log_path);
  }
}

queue.ResolvedListener(resolvedHandler);

const errorHandler: Handler<Error> = ({ promise, resolved }): void => {
  if (resolved.error) {
    logOut();
    logErrors(resolved.error, config.logs.err_log_path);
  }
}

queue.RejectedListener(errorHandler);

const videos = video_reader.getVideosFromFile();

for (let video of videos) {
  let convert_promise: WrappedPromise<{ result: any; error: Error | null; }> = () => { return video_converter.convertVideo(video.videoLocation, video.videoTitle, video.videoExtension, video.videoTitle) };
  queue.AddToQue(convert_promise);
  queue.Run();
}