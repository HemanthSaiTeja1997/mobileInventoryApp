import { Injectable } from '@angular/core';
import { ApiStatus, ApiType, HttpMethod, EBS_API, EBS_API_METADATA, } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiList {
  masterApiList = [
    
  ]
  apiList =[
    {
      apiName :'getItems',
      apiUrl:EBS_API.GET_ITEMS,
      tableName:'Items',
      IsCSV:true,
      metaDataurl:'',
      apiType:ApiType.MASTER,
      responseKey:'',
      apiStatus:ApiStatus.INITIAL,
      message :'Items Table Downloaded Successful',
      httpType:HttpMethod.GET
  },
      {
      apiName :'getSubinventories',
      apiUrl:EBS_API.GET_SUBINVENTORY,
      tableName:'Subinventories',
      IsCSV:false,
      metaDataurl:EBS_API_METADATA.METADATA_SUBINVENTORY_API,
      apiType:ApiType.MASTER,
      responseKey:'ActiveSubInventories',
      apiStatus:ApiStatus.INITIAL,
      message :'Subinventories Table Downloaded Successful',
      httpType:HttpMethod.GET

  },
  {
      apiName :'getLocatorsTable',
      apiUrl:EBS_API.GET_LOCATORS,
      tableName:'LocatorsTable',
      IsCSV:true,
      metaDataurl:'',
      apiType:ApiType.MASTER,
      responseKey:'',
      apiStatus:ApiStatus.INITIAL,
      message :'LocatorsTable Table Downloaded Successful',
      httpType:HttpMethod.GET

  },
    {
      apiName :'getGLPeriods',
      apiUrl:EBS_API.GET_LOCATORS,
      tableName:'GLPeriods',
      IsCSV:true,
      metaDataurl:EBS_API_METADATA.METADATA_GLPERIODS_API,
      apiType:ApiType.CONFIG,
      responseKey:'',
      apiStatus:ApiStatus.INITIAL,
      message :'GLPeriods Table Downloaded Successful',
      httpType:HttpMethod.GET

  },
       {
      apiName :'getInventoryPeriods',
      apiUrl:EBS_API.GET_INVENTORY_PERIODS,
      tableName:'InventoryPeriods',
      IsCSV:false,
      metaDataurl:EBS_API_METADATA.METADATA_INVENTORY_PERIODS_API,
      apiType:ApiType.CONFIG,
      responseKey:'InventoryPeriods',
      apiStatus:ApiStatus.INITIAL,
      message :'InventoryPeriods Table Downloaded Successful',
      httpType:HttpMethod.GET

  },

       {
      apiName :'getDocumentsForReceiving',
      apiUrl:EBS_API.GET_DOCUMENT_FOR_RECEIVING,
      tableName:'DocumentsForReceiving',
      IsCSV:false,
      metaDataurl:EBS_API_METADATA.METADATA_DOCUMENT_FOR_RECEIVING_API,
      apiType:ApiType.TRANSCATIONAL,
      responseKey:'Docs4Receiving',
      apiStatus:ApiStatus.INITIAL,
      message :'DocumentsForReceiving Table Downloaded Successful',
      httpType:HttpMethod.GET

  },
        {
      apiName :'getLotsTableType',
      apiUrl:EBS_API.GET_LOTS_TABLE,
      tableName:'LotsTable',
      IsCSV:true,
      metaDataurl:'',
      apiType:ApiType.TRANSCATIONAL,
      responseKey:'',
      apiStatus:ApiStatus.INITIAL,
      message :'LotsTableType  Downloaded Successful',
      httpType:HttpMethod.GET

  },
]

getTableData(): string[] {
  return this.apiList.map(e => e.tableName);
}

}
