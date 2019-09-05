import { RowDataPacket, OkPacket, FieldPacket} from "mysql2/promise";

export interface IPromiseResult<T>{
  result: T | never,
  error: any
}

export interface IExecuteQuery {
  ExecuteQuery<T>(query: string, values: string[]): Promise<IPromiseResult<T | any>>;
}

export interface IConverter {
  Convert<T>(video: IVideo): Promise<IPromiseResult<T | any>>;
}

export interface IInsertVideo {
  InsertVideo<T>(video: IVideo): Promise<IPromiseResult<T | any>>;
}

export interface IVideo {
  id: number;
  title: string;
  url: string;
}