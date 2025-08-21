import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection, SQLiteConnection } from '@capacitor-community/sqlite';
import { BehaviorSubject } from 'rxjs';
import { Data, Metadata } from 'src/app/interfaces/loginrespone.interface';


@Injectable({
  providedIn: 'root'
})
export class Sqliteservice {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db: SQLiteDBConnection | null = null;
    private loginUsers = new BehaviorSubject<any>([]);
  loginusers$ = this.loginUsers.asObservable();
  async createLoginTable(databaseName: string, tableName: string, metaData: Metadata[]) {
    try {
      await this.sqlite.checkConnectionsConsistency();
      const isConnected = await this.sqlite.isConnection(databaseName, false);

      if (isConnected.result) {
        this.db = await this.sqlite.retrieveConnection(databaseName, false);
      } else {
        this.db = await this.sqlite.createConnection(databaseName, false, "no-encryption", 1, false);
        await this.db.open();
      }
      const columeNameWithType = metaData.map((data) => `${data.name} ${data.type}`).join(' ,');
      const schema = `CREATE TABLE  IF NOT EXISTS ${tableName} (${columeNameWithType});`
      await this.db.execute(schema);
    } catch (err) {
      console.error("DB initialization error:", err);
    }
  }

  async registerLoginUsers(tableName: string, data: Data[]): Promise<boolean> {
    if (!this.db) {
      console.log("DB not connted");
      return false
    };
    const columns = Object.keys(data[0]).join(', ');
    const valuesList = data.map(row => {
      const values = Object.values(row)
        .map(v => `"${v}"`)
        .join(", ");
      return `(${values})`;
    }).join(", ");
    const query = `INSERT INTO ${tableName} (${columns} ) VALUES ${valuesList}`;
    const result = await this.db?.run(query);
    await this.loadUsers(tableName);
    return true;
  }
    async loadUsers(tableName:string) {
    const result = await this.db?.query(`SELECT * FROM ${tableName}`);
    const users = result?.values || [];
    this.loginUsers.next(users);
    
  }

}
