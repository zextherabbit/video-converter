import connection from "./src/database/Connection";
import { Database } from "./src/database/Database";
import { VideoModel } from "./src/models/Video";

const db = new Database(connection);
const vm = new VideoModel(db);

const video = {
  id: 1,
  url: "",
  title: ""
}

async function i() {
  const inserted = await vm.Insert(video);
}