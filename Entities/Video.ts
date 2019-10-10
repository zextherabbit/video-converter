export default class Video {

  private title: string;
  private extension: string;
  private location: string;
  private remoteUrl: string | undefined;

  constructor(title: string, extension: string, location: string, remoteUrl?:string){
      this.title = title;
      this.extension = extension;
      this.location = location;
      this.remoteUrl = remoteUrl;
  }

  get videoTitle(){
    return this.title;
  }

  get videoExtension(){
    return this.extension;
  }

  get videoLocation(){
    return this.location;
  }

  get videoUrl(){
    return this.remoteUrl;
  }

}