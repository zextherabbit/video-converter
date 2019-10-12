import * as fs from "fs";

function writeToFile(message: any, path: string){
  const stream = fs.createWriteStream(path, { encoding: "utf8", flags: 'a' });
  stream.write(message + '\n');
  stream.close();
}

function logErrors(error: string, path: string){
  return writeToFile(error, path);
}

function logFile(log: string, path: string){
  return writeToFile(log, path);
}

export { logErrors, logFile };