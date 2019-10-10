import IReadVideos from "../Controllers/IReadVideos";
import Video from "../Entities/Video";

export default class VideoReader {

  private videoFileReader: IReadVideos;
  private videos: Video[];

  constructor(videoFileReader: IReadVideos) {
    this.videoFileReader = videoFileReader;
    this.videos = [];
  }

  private splitVideoFromExtension(videoFile: string) {
    const title = videoFile.substring(videoFile.lastIndexOf('.'), -1);
    const extension = videoFile.substring(videoFile.lastIndexOf('.'));
    if (typeof extension === 'undefined' || typeof title === 'undefined') throw new Error('Invalid video file name');
    return { extension, title };
  }

  public getVideosFromFile() {
    const videos = this.videoFileReader.readVideos();

    for (let video of videos) {
      let ext_title = this.splitVideoFromExtension(video);
      this.videos.push(new Video(ext_title.title, ext_title.extension, this.videoFileReader.getVideosPath()));
    }

    return this.videos;

  }

}