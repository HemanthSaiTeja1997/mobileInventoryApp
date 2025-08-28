import { Injectable } from '@angular/core';
import { Apiservice } from '../apiservice/apiservice';
import { ApiListType, ResponseApiType } from 'src/app/interfaces/getApiResponse';
import { ApiList } from '../apiList/api-list';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, take } from 'rxjs';
import { Sqliteservice } from '../sqlite/sqliteservice';
import { Metadata } from 'src/app/interfaces/loginrespone.interface';
import { ApiStatus } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class GetApiResponseService {

  constructor(private apiService: Apiservice, private apiList: ApiList, private sqlite: Sqliteservice) { }

  getResponse(apiData: ApiListType): Promise<ResponseApiType> {
    return new Promise(async (resolve, reject) => {
      const {
        apiName,
        tableName,
        apiUrl,
        IsCSV,
        metaDataurl,
        httpType,
        responseKey
      } = apiData;

      try {
        if (IsCSV) {
          const response = await firstValueFrom(this.apiService.apiRequest(httpType, apiUrl));
          const csvData = response as any[][];

          if (csvData && Array.isArray(csvData) && csvData.length > 0 && typeof csvData[0] === 'object') {
            await this.sqlite.createCSVTypeTable(tableName, csvData);
          }

          resolve({
            tableName,
            Status: 200,
            apiStatus: ApiStatus.SUCCESS,
            message: `${tableName}  fetched and stored successfully`
          });

        } else {
          //  metadata
          const metaDataRes = await firstValueFrom(this.apiService.apiRequest(httpType, metaDataurl));
          const metaData = metaDataRes as Metadata[];

          // Create table using metadata
          await this.sqlite.createTable(tableName, metaData);

          // Fetch main data and insert into DB
          this.apiService.apiRequest(httpType, apiUrl).subscribe({
            next: async (data: any) => {
              try {
                await this.sqlite.insertDataIntoTable(tableName, data?.[responseKey]);

                resolve({
                  tableName,
                  Status: 200,
                  apiStatus: ApiStatus.SUCCESS,
                  message: `${tableName} fetched and stored successfully`
                });
              } catch (dbError) {
                console.error(`DB Insert error for ${apiName}`, dbError);
                reject({
                  tableName,
                  Status: 500,
                  apiStatus: ApiStatus.FAILED,

                  message: `DB insert failed for ${tableName}: ${dbError}`
                });
              }
            },
            error: (apiError) => {
              console.error(`API fetch error for ${apiName}`, apiError);
              reject({
                tableName,
                Status: 500,
                apiStatus: ApiStatus.FAILED,
                message: `Failed to fetch data for ${tableName}: ${apiError}`
              });
            }
          });
        }

      } catch (error) {
        console.error(`Error in getResponse for ${apiName}`, error);

        reject({
          tableName,
          Status: 500,
          message: `Failed to fetch/store ${tableName}: ${error}`
        });
      }
    });
  }
}