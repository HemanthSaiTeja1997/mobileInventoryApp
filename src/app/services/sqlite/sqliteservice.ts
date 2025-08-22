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
  private userOrganization = new BehaviorSubject<any>([]);
  userOrganizations$ = this.userOrganization.asObservable();
  async createDatabaseWithTable(databaseName: string, tableName: string, metaData: Metadata[], primaryKey: string = '') {
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
      const schema = `CREATE TABLE  IF NOT EXISTS ${tableName} (${columeNameWithType}${primaryKey});`
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
    await this.db?.run(query);
    const users = await this.selectAllFromTable(tableName);
    this.loginUsers.next(users);
    return true;
  }
  async selectAllFromTable(tableName: string) {
    const result = await this.db?.query(`SELECT * FROM ${tableName}`);
    return result?.values || [];
  }

  async createOrganizationTable(databaseName: string, tableName: string, csvData: any[][]) {
    try {
      const columns = csvData[0];
      const rowValues = csvData.slice(1);
      const primaryKey: string[] = [];
      const columnWithoutSuffix = columns.map(col => {
        if (col.endsWith('_PK')) {
          const colWithoutSuffix = col.replace('_PK', '');
          primaryKey.push(colWithoutSuffix);
          return colWithoutSuffix;
        }
        return col;
      });
      const metaData = columnWithoutSuffix.map(name => ({
        name,
        type: 'TEXT'
      }));

      const primaryKeys = primaryKey.length > 0 ? ` , PRIMARY KEY (${primaryKey.join(' ,')})` : '';

      await this.createDatabaseWithTable(databaseName, tableName, metaData, primaryKeys);
      const valueString = rowValues
        .map(row => `(${row.map(() => '?').join(',')})`)
        .join(',');
      const flatValues = rowValues.reduce((acc, val) => acc.concat(val), []);
      const insertquery = `INSERT or Ignore INTO ${tableName} (${columnWithoutSuffix.join(',')} ) VALUES ${valueString}`;
      await this.db?.run(insertquery, flatValues);
      const organizations = await this.selectAllFromTable(tableName);
      this.userOrganization.next(organizations);

    } catch (error) {
      console.error("Error initializing table from CSV:", error);

    }
  }

}
