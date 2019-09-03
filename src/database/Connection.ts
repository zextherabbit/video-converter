import { IConnection } from "../interfaces/IConnection";
import * as mysql from "mysql2/promise";
import config from "../../config.json";

class MysqlConnection implements IConnection {

  private connection: mysql.Pool;
  private static _Instance: MysqlConnection;

  private constructor() {
    this.connection = mysql.createPool(this.config());
  }

  public static get Instance() {
    return this._Instance || (this._Instance = new MysqlConnection());
  }

  private config() {
    return {
      host: config.db_config.host,
      user: config.db_config.user,
      password: config.db_config.password,
      database: config.db_config.name,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    }
  }

  ExecuteQuery(query: string, values: string[]) {
    return this.connection.execute(query, values);
  }

}

export default MysqlConnection.Instance;