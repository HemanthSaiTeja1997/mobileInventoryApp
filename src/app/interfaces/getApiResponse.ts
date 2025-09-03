import { ApiType, HttpMethod } from "../utils/constants"

export interface ResponseApiType {
  tableName: string
  Status: number
  apiStatus:string
  message: string,
  apiType:ApiType
}

export interface ApiListType {
  apiName: string
  apiUrl: string
  tableName: string
  IsCSV: boolean
  metaDataurl: string
  apiType: ApiType
  responseKey: string
  apiStatus: string
  message: string
  httpType: HttpMethod
}

export interface Docs4ReceivingType {
  PoNumber: number;
  PoType: string;
  Requestor: string;
  VendorName: string;
  items: number;
}