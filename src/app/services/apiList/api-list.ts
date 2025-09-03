import { Injectable } from '@angular/core';
import { ApiListType } from 'src/app/interfaces/getApiResponse';
import { ApiStatus, ApiType, HttpMethod, EBS_API, EBS_API_METADATA, } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiList {
  apisBasedOnResponsibility: ApiListType[] = [];
  apiList = [
    {
      apiName: 'getItems',
      apiUrl: EBS_API.GET_ITEMS,
      tableName: 'Items',
      IsCSV: true,
      metaDataurl: '',
      apiType: ApiType.MASTER,
      responseKey: '',
      apiStatus: ApiStatus.INITIAL,
      message: 'Items Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getglaccounts',
      apiUrl: EBS_API.GET_GL_ACCOUNT,
      tableName: 'glaccounts',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_GLACCOUNT_API,
      apiType: ApiType.MASTER,
      responseKey: 'GLAccounts',
      apiStatus: ApiStatus.INITIAL,
      message: 'glaccounts Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getSubinventories',
      apiUrl: EBS_API.GET_SUBINVENTORY,
      tableName: 'Subinventories',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_SUBINVENTORY_API,
      apiType: ApiType.MASTER,
      responseKey: 'ActiveSubInventories',
      apiStatus: ApiStatus.INITIAL,
      message: 'Subinventories Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getLocatorsTable',
      apiUrl: EBS_API.GET_LOCATORS,
      tableName: 'LocatorsTable',
      IsCSV: true,
      metaDataurl: '',
      apiType: ApiType.MASTER,
      responseKey: '',
      apiStatus: ApiStatus.INITIAL,
      message: 'LocatorsTable Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getRestrictedSubinventories',
      apiUrl: EBS_API.GET_RESTRICTEDSUBINVENTORIES,
      tableName: 'RestrictedSubinventories',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_RESTRICTEDSUBINVENTORIES_API,
      apiType: ApiType.MASTER,
      responseKey: 'RestrictedSubInventories',
      apiStatus: ApiStatus.INITIAL,
      message: 'RestrictedSubinventories Table Downloaded Successful',
      httpType: HttpMethod.GET
    },

    {
      apiName: 'getRestrictedLocators',
      apiUrl: EBS_API.GET_RESTRICTEDLOCATORS,
      tableName: 'RestrictedLocators',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_RESTRICTEd_LOCATORS_API,
      apiType: ApiType.MASTER,
      responseKey: 'RestrictedLocators',
      apiStatus: ApiStatus.INITIAL,
      message: 'RestrictedLocators Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getEmployeesTable',
      apiUrl: EBS_API.GET_EMPLOYEETABLE,
      tableName: 'EmployeesTable',
      IsCSV: true,
      metaDataurl: '',
      apiType: ApiType.MASTER,
      responseKey: '',
      apiStatus: ApiStatus.INITIAL,
      message: 'EmployeesTable Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getLocations',
      apiUrl: EBS_API.GET_LOCATIONS,
      tableName: 'Locations',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_LOCATIONS_API,
      apiType: ApiType.MASTER,
      responseKey: 'LocationList',
      apiStatus: ApiStatus.INITIAL,
      message: 'Locations Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getAccountAliases',
      apiUrl: EBS_API.GET_ACCOUNT_ALIASES,
      tableName: 'AccountAliases',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_ACCOUNTALIASES_API,
      apiType: ApiType.MASTER,
      responseKey: 'AccountAliasesList',
      apiStatus: ApiStatus.INITIAL,
      message: 'AccountAliases Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getUnitOfMeasuresConversions',
      apiUrl: EBS_API.GET_UNIT_MEASURES_CONVERSIONS,
      tableName: 'UnitOfMeasuresConversions',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_UNIT_MEASURES_API,
      apiType: ApiType.MASTER,
      responseKey: 'Items',
      apiStatus: ApiStatus.INITIAL,
      message: 'UnitOfMeasuresConversions Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getItemRevisions',
      apiUrl: EBS_API.GET_ITEMS_REVISIONS,
      tableName: 'ItemRevisions',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_ITEM_REVISIONS_API,
      apiType: ApiType.MASTER,
      responseKey: 'Items',
      apiStatus: ApiStatus.INITIAL,
      message: 'ItemRevisions Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getWorkOrdersoperations',
      apiUrl: EBS_API.GET_WORK_ORDER_OPERATIONS,
      tableName: 'WorkOrdersOperations',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_WORK_ORDER_OPERATIONS_API,
      apiType: ApiType.MASTER,
      responseKey: 'WorkOrdersOperations',
      apiStatus: ApiStatus.INITIAL,
      message: 'WorkOrdersOperations Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getOnHandQuantities',
      apiUrl: EBS_API.GET_ON_HAND_QUANTITIES,
      tableName: 'OnHandQuantityList',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_ONHAND_QUANTITIES,
      apiType: ApiType.MASTER,
      responseKey: 'OnHandQuantityList',
      apiStatus: ApiStatus.INITIAL,
      message: 'OnHandQuantityList Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getShippingNetworks',
      apiUrl: EBS_API.GET_SHIPPING_NETWORK,
      tableName: 'ShippingNetworks',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_SHIPPING_NETWORK,
      apiType: ApiType.MASTER,
      responseKey: 'ShippingNetworks',
      apiStatus: ApiStatus.INITIAL,
      message: 'ShippingNetworks Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getreasons',
      apiUrl: EBS_API.GET_REASONS,
      tableName: 'Reasons',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_REASONS,
      apiType: ApiType.CONFIG,
      responseKey: 'Reasons',
      apiStatus: ApiStatus.INITIAL,
      message: 'Reasons Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getPurchasingPeriods',
      apiUrl: EBS_API.GET_PURCHASING_PERIODS,
      tableName: 'PurchasingPeriods',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_PURCHASING_PERIODS,
      apiType: ApiType.CONFIG,
      responseKey: 'POPeriods',
      apiStatus: ApiStatus.INITIAL,
      message: 'PurchasingPeriods Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getGLPeriods',
      apiUrl: EBS_API.GET_LOCATORS,
      tableName: 'GLPeriods',
      IsCSV: true,
      metaDataurl: EBS_API_METADATA.METADATA_GLPERIODS_API,
      apiType: ApiType.CONFIG,
      responseKey: '',
      apiStatus: ApiStatus.INITIAL,
      message: 'GLPeriods Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getInventoryPeriods',
      apiUrl: EBS_API.GET_INVENTORY_PERIODS,
      tableName: 'InventoryPeriods',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_INVENTORY_PERIODS_API,
      apiType: ApiType.CONFIG,
      responseKey: 'InventoryPeriods',
      apiStatus: ApiStatus.INITIAL,
      message: 'InventoryPeriods Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getSerialTableType',
      apiUrl: EBS_API.GET_SERIAL_TABLE,
      tableName: 'SerialTable',
      IsCSV: true,
      metaDataurl: '',
      apiType: ApiType.TRANSCATIONAL,
      responseKey: '',
      apiStatus: ApiStatus.INITIAL,
      message: 'SerialTable  Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getDocumentsForReceiving',
      apiUrl: EBS_API.GET_DOCUMENT_FOR_RECEIVING,
      tableName: 'DocumentsForReceiving',
      IsCSV: false,
      metaDataurl: EBS_API_METADATA.METADATA_DOCUMENT_FOR_RECEIVING_API,
      apiType: ApiType.TRANSCATIONAL,
      responseKey: 'Docs4Receiving',
      apiStatus: ApiStatus.INITIAL,
      message: 'DocumentsForReceiving Table Downloaded Successful',
      httpType: HttpMethod.GET
    },
    {
      apiName: 'getLotsTableType',
      apiUrl: EBS_API.GET_LOTS_TABLE,
      tableName: 'LotsTable',
      IsCSV: true,
      metaDataurl: '',
      apiType: ApiType.TRANSCATIONAL,
      responseKey: '',
      apiStatus: ApiStatus.INITIAL,
      message: 'LotsTableType  Downloaded Successful',
      httpType: HttpMethod.GET
    },
  ]

  getTableData(): string[] {
    return this.apiList.map(e => e.tableName);
  }

  private responsibilityApi: { [key: string]: string[] } = {
    "GOODS RECEIPTS": [
      'getItems',
      'getSerialTableType',
      'getSubinventories',
      'getLocatorsTable',
      'getGLPeriods',
      'getInventoryPeriods',
      'getDocumentsForReceiving',
      'getLotsTableType'
    ]
  };

  getListOfApisBasedOnResponsibility(responsibility: string) :ApiListType[] {
    const responsibilityName = Object.keys(this.responsibilityApi).find(respone => responsibility.includes(respone));
    if (responsibilityName) {
      const allowedApiNames = this.responsibilityApi[responsibilityName];
      return this.apiList.filter(api => allowedApiNames.includes(api.apiName));
    }
    else {
     return []
    }
  }

}
