import Converter from "./Controllers/Converter";
import ConvertVideo from "./UseCases/ConvertVideo";
import config from "./config.json";

import path from 'path';

const p = path.join(__dirname);

const converter = new Converter(5 * 60 * 1000);
const video_converter = new ConvertVideo(p, config.ffmpeg_config.command, config.ffmpeg_config.path, config.general.extension, converter);

const videoFile = "5ce52c0076273.mp4";

const c = videoFile.substring(videoFile.lastIndexOf('.'), -1);
const b = videoFile.substring(videoFile.lastIndexOf('.'));

console.log(c);
console.log(b);