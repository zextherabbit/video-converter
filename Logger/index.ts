import * as fs from "fs";

function writeToFile(message: any, path: string){
  const stream = fs.createWriteStream(path, { encoding: "utf8", flags: 'a' });
  stream.write(message);
  stream.close();
}

function logErrors(error: Error, path: string){
  return writeToFile(error, path);
}

function logFile(log: string, path: string){
  return writeToFile(log, path);
}

function log(message: string){
  process.stdout.write(message + '\r');
}

export { logErrors, logFile, log };