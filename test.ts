import Connection from "./src/database/Connection";
import Database from "./src/database/Database";
import VideoModel from "./src/database/VideoModel";

const con = new Connection({});
const db = new Database(con);
const vm = new VideoModel(db);

const video = {
  id: 1,
  url: "https://video.com/video",
  title: "somevideo"
}
