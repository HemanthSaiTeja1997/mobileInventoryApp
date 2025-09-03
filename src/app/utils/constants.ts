import { environment } from "src/environments/environment";

const InventoryOrgId = localStorage.getItem('InventoryOrgId');
const organizationID = localStorage.getItem('orgId');
export const ORGANIZATION_CONSTANTS = {
    TABLE_NAME: 'organizations',
    ORGANIZATION_API: `${environment.baseUrl}23A/getInventoryOrganizationsTable`,

}
export enum ApiVersion {
    _20D = '20D',
    _23A = '23A',
    _22A = '22A',
}

export const LOGIN_CONSTANTS = {
    TABLE_NAME: 'loginUser',
    LOGIN_API: `${environment.baseUrl}${ApiVersion._20D}/login`
}
export const EBS_API = {
    GET_ITEMS: `${environment.baseUrl}${ApiVersion._20D}/getItemsTable/${InventoryOrgId}/%22%22`,
    GET_GL_ACCOUNT: `${environment.baseUrl}${ApiVersion._20D}/getglaccounts/${organizationID}`,
    GET_SUBINVENTORY: `${environment.baseUrl}${ApiVersion._20D}/getSubinventories/${InventoryOrgId}/%22null%22/%22Y%22`,
    GET_LOCATORS: `${environment.baseUrl}${ApiVersion._23A}/getLocatorsTable/${InventoryOrgId}/%22%22`,
    GET_RESTRICTEDSUBINVENTORIES: `${environment.baseUrl}${ApiVersion._20D}/getRestrictedSubinventories/${InventoryOrgId}/%22null%22/%22Y%22`,
    GET_RESTRICTEDLOCATORS: `${environment.baseUrl}${ApiVersion._20D}/getRestrictedLocators/${InventoryOrgId}/%22null%22/%22Y%22`,
    GET_EMPLOYEETABLE: `${environment.baseUrl}${ApiVersion._23A}/getEmployeesTable/${InventoryOrgId}/%22%22`,
    GET_LOCATIONS: `${environment.baseUrl}${ApiVersion._20D}/getLocations/%22null%22/%22Y%22`,
    GET_ACCOUNT_ALIASES: `${environment.baseUrl}${ApiVersion._20D}/getAccountAliases/${InventoryOrgId}`,
    GET_UNIT_MEASURES_CONVERSIONS: `${environment.baseUrl}${ApiVersion._20D}/getUnitOfMeasuresConversions/${InventoryOrgId}/%22%22`,
    GET_ITEMS_REVISIONS: `${environment.baseUrl}${ApiVersion._20D}/getItemRevisions/${InventoryOrgId}/%22%22`,
    GET_WORK_ORDER_OPERATIONS: `${environment.baseUrl}${ApiVersion._20D}/getWorkOrdersoperations/${InventoryOrgId}/%22%22`,
    GET_ON_HAND_QUANTITIES: `${environment.baseUrl}${ApiVersion._20D}/getOnHandQuantities/${InventoryOrgId}`,
    GET_SHIPPING_NETWORK: `${environment.baseUrl}${ApiVersion._20D}/getShippingNetworks/${InventoryOrgId}`,
    GET_REASONS: `${environment.baseUrl}${ApiVersion._20D}/getreasons`,
    GET_PURCHASING_PERIODS: `${environment.baseUrl}${ApiVersion._20D}/getPurchasingPeriods/${organizationID}`,
    GET_GLPERIODS: `${environment.baseUrl}${ApiVersion._20D}/getGLPeriods/${InventoryOrgId}`,
    GET_INVENTORY_PERIODS: `${environment.baseUrl}${ApiVersion._20D}/getInventoryPeriods/${organizationID}/${InventoryOrgId}`,
    GET_DOCUMENT_FOR_RECEIVING: `${environment.baseUrl}${ApiVersion._20D}/getDocumentsForReceiving/${InventoryOrgId}/%22null%22/%22Y%22`,
    GET_LOTS_TABLE: `${environment.baseUrl}${ApiVersion._22A}/getLotsTableType/${InventoryOrgId}/%22%22`,
    GET_SERIAL_TABLE: `${environment.baseUrl}${ApiVersion._22A}/getSerialTableType/${InventoryOrgId}/%22/468517/473573`,
}
export const EBS_API_METADATA = {
    METADATA_GLACCOUNT_API: `${environment.baseUrl}${ApiVersion._20D}/getglaccountsmetadata`,
    METADATA_SUBINVENTORY_API: `${environment.baseUrl}${ApiVersion._20D}/getSubinventories/metadata`,
    METADATA_GLPERIODS_API: `${environment.baseUrl}${ApiVersion._20D}/getGLPeriodsmetadata`,
    METADATA_RESTRICTEDSUBINVENTORIES_API: `${environment.baseUrl}${ApiVersion._20D}/getRestrictedSubinventories/metadata`,
    METADATA_RESTRICTEd_LOCATORS_API: `${environment.baseUrl}${ApiVersion._20D}/getRestrictedLocators/metadata`,
    METADATA_LOCATIONS_API: `${environment.baseUrl}${ApiVersion._20D}/getLocations/metadata`,
    METADATA_ACCOUNTALIASES_API: `${environment.baseUrl}${ApiVersion._20D}/getAccountAliasesmetadata`,
    METADATA_UNIT_MEASURES_API: `${environment.baseUrl}${ApiVersion._20D}/getUnitOfMeasuresConversionsmetadata`,
    METADATA_ITEM_REVISIONS_API: `${environment.baseUrl}${ApiVersion._20D}/getItemRevisionsmetadata`,
    METADATA_WORK_ORDER_OPERATIONS_API: `${environment.baseUrl}${ApiVersion._20D}/getWorkOrdersoperations/metadata`,
    METADATA_ONHAND_QUANTITIES: `${environment.baseUrl}${ApiVersion._20D}/getOnHandQuantitiesmetadata`,
    METADATA_SHIPPING_NETWORK: `${environment.baseUrl}${ApiVersion._20D}/getShippingNetworksmetadata`,
    METADATA_REASONS: `${environment.baseUrl}${ApiVersion._20D}/getreasons/metadata`,
    METADATA_PURCHASING_PERIODS: `${environment.baseUrl}${ApiVersion._20D}/getPurchasingPeriodsmetadata`,
    METADATA_INVENTORY_PERIODS_API: `${environment.baseUrl}${ApiVersion._20D}/getInventoryPeriods/metadata`,
    METADATA_DOCUMENT_FOR_RECEIVING_API: `${environment.baseUrl}${ApiVersion._20D}/getDocumentsForReceiving/metadata`,
}

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export enum ToastPosition {
    TOP = 'top',
    MIDDLE = 'middle',
    BOTTOM = 'bottom'
}

export enum ToastColor {
    SUCCESS = 'success',
    DANGER = 'danger',
    WARN = 'warning'
}
export enum ApiType {
    MASTER = 'master',
    CONFIG = 'config',
    TRANSCATIONAL = 'transactional'
}


export enum ApiStatus {
    SUCCESS = 'success',
    FAILED = 'failed',
    NO_CONTENT = 'no-content',
    INITIAL = 'initial'
}

export const LOGIN_MESSAGES = {
    LOGIN_INVALID_MESSAGE: 'Please fill all required fields',
    LOGIN_FAILED_MESSAGE: 'Login failed. Try again.'
}

export const ROUTES = {
    ORGANIZATION: '/organization'
}