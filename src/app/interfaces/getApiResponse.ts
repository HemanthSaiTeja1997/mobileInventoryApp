import { HttpMethod } from "../utils/constants"

export interface ResponseApiType {
  tableName: string
  Status: number
  apiStatus:string
  message: string
}

export interface ApiListType {
  apiName: string
  apiUrl: string
  tableName: string
  IsCSV: boolean
  metaDataurl: string
  apiType: string
  responseKey: string
  apiStatus: string
  message: string
  httpType: HttpMethod
}