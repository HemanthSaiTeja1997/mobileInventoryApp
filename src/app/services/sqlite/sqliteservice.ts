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
  async createDatabase(databaseName: string) {
    try {
      await this.sqlite.checkConnectionsConsistency();
      const isConnected = await this.sqlite.isConnection(databaseName, false);

      if (isConnected.result) {
        this.db = await this.sqlite.retrieveConnection(databaseName, false);
      } else {
        this.db = await this.sqlite.createConnection(databaseName, false, "no-encryption", 1, false);
        await this.db.open();
      }
    } catch (err) {
      console.error("DB initialization error:", err);
    }
  }
  async createTable(tableName: string, metaData: Metadata[], primaryKey: string = '') {
    try {
            const primaryKey: string[] = [];
      const columnWithPK = metaData.map(col => {
        if (col.primarykey) {
          const colWithPK = col.name;
          primaryKey.push(colWithPK);
          return colWithPK;
        }
        return col;
      });
      const columeNameWithType = metaData.map((data) => `${data.name} ${data.type}`).join(' ,');
      const primaryKeys = primaryKey.length > 0 ? ` , PRIMARY KEY (${primaryKey.join(' ,')})` : '';
      const schema = `CREATE TABLE  IF NOT EXISTS ${tableName} (${columeNameWithType}${primaryKeys});`
      await this.db?.execute(schema);
    } catch (error) {
      console.error("Error in Creating Table:", error);

    }

  }

  // async insertDataIntoTable(tableName: string, data: Data[]): Promise<void> {
  //   if (!this.db) {
  //     console.log("DB not connted");
  //   };
  //   if (!data || data.length === 0) {
  //   console.warn(` No data to insert into ${tableName}`);
  //   return;
  // }
  //   const columns = Object.keys(data[0]).join(', ');
  //   const valuesList = data.map(row => {
  //     const values = Object.values(row)
  //       .map(v => `"${v}"`)
  //       .join(", ");
  //     return `(${values})`;
  //   }).join(", ");
  //   await this.db?.execute(`DELETE FROM ${tableName}`);
  //   const query = `INSERT OR IGNORE INTO ${tableName} (${columns} ) VALUES ${valuesList}`;
  //   await this.db?.run(query);
  // }

async insertDataIntoTable(
  tableName: string,
  data: Data[],
  maxBatchSize: number = 100
): Promise<void> {
  try {
    if (!this.db) {
      console.error("DB not connected");
      return;
    }

    if (!data || data.length === 0) {
      console.warn(`No data to insert into ${tableName}`);
      return;
    }

    const columns = Object.keys(data[0]);
    const colCount = columns.length;

    // SQLite param limit = 999
    const safeBatchSize = Math.min(
      maxBatchSize,
      Math.floor(999 / colCount)
    );

    if (safeBatchSize < maxBatchSize) {
      console.warn(
        `Requested batch size (${maxBatchSize}) too large for ${colCount} columns. Using safe batch size: ${safeBatchSize}`
      );
    }

    // Clear old data
    await this.db.execute(`DELETE FROM ${tableName}`);

    // Insert in batches
    for (let i = 0; i < data.length; i += safeBatchSize) {
      const batch = data.slice(i, i + safeBatchSize);

      const placeholders = batch
        .map(() => `(${columns.map(() => "?").join(",")})`)
        .join(",");

       const flatValues = batch.flatMap(row => Object.values(row));


      const insertQuery = `INSERT OR REPLACE INTO ${tableName} (${columns.join(",")}) VALUES ${placeholders}`;
      await this.db.run(insertQuery, flatValues);
    }

      // Delete rows where Flag = 'D'
  await this.db?.run(`DELETE FROM ${tableName} WHERE Flag = 'D'`);

  } catch (error) {
    console.error(`Error inserting data into ${tableName}:`, error);
  }
}



  async selectAllFromTable(tableName: string): Promise<any> {
    const result = await this.db?.query(`SELECT * FROM ${tableName}`);
    return result?.values || [];
  }

  async createCSVTypeTable(
  tableName: string,
  csvData: any[][],
  maxBatchSize: number = 100 // default 100
): Promise<void> {
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

    const primaryKeys =
      primaryKey.length > 0
        ? ` , PRIMARY KEY (${primaryKey.join(' ,')})`
        : '';

    await this.createTable(tableName, metaData, primaryKeys);

    // Clear old data
    await this.db?.execute(`DELETE FROM ${tableName}`);

    //  Safety check against SQLite parameter limit (999)
    const colCount = columnWithoutSuffix.length;
    const safeBatchSize = Math.min(
      maxBatchSize,
      Math.floor(999 / colCount)
    );

    if (safeBatchSize < maxBatchSize) {
      console.warn(
        `Requested batch size (${maxBatchSize}) too large for ${colCount} columns. Using safe batch size: ${safeBatchSize}`
      );
    }

    //  bulk insertion
    for (let i = 0; i < rowValues.length; i += safeBatchSize) {
      const batch = rowValues.slice(i, i + safeBatchSize);

      const valueString = batch
        .map(row => `(${row.map(() => '?').join(',')})`)
        .join(',');

      const flatValues = batch.reduce((acc, val) => acc.concat(val), []);

      const insertquery = `INSERT OR REPLACE INTO ${tableName} (${columnWithoutSuffix.join(',')}) VALUES ${valueString}`;

      await this.db?.run(insertquery, flatValues);
    }
      // Delete rows where Flag = 'D'

  await this.db?.run(`DELETE FROM ${tableName} WHERE Flag = 'D'`);


  } catch (error) {
    console.error("Error initializing table from CSV:", error);
  }
}


}
