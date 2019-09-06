import { IVideo } from './IVideo';
export default class Video {

    private _video: IVideo;

    constructor(video: IVideo){
        this._video = video;
    }

    public get Video(): IVideo{
        return this._video;
    }

}