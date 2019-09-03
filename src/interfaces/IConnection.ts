export interface IConnection {
  ExecuteQuery(query: string, values: string[]): Promise<any>;
}