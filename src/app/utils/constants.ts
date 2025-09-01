import { environment } from "src/environments/environment";

const InventoryOrgId = localStorage.getItem('InventoryOrgId');
const organizationID = localStorage.getItem('orgId');
export const ORGANIZATION_CONSTANTS = {
    TABLE_NAME: 'organizations',
    ORGANIZATION_API: `${environment.baseUrl}23A/getInventoryOrganizationsTable`
}

export const LOGIN_CONSTANTS = {
    TABLE_NAME: 'loginUser',
    LOGIN_API: `${environment.baseUrl}20D/login`
}
export const EBS_API = {
    GET_ITEMS: `${environment.baseUrl}20D/getItemsTable/${InventoryOrgId}/%22%22`,
    GET_GL_ACCOUNT: `${environment.baseUrl}20D/getglaccounts/${InventoryOrgId}`,
    GET_SUBINVENTORY: `${environment.baseUrl}20D/getSubinventories/${InventoryOrgId}/%22null%22/%22Y%22`,
    GET_LOCATORS: `${environment.baseUrl}23A/getLocatorsTable/${InventoryOrgId}/%22%22`,
    GET_RESTRICTEDSUBINVENTORIES: `${environment.baseUrl}20D/getRestrictedSubinventories/${InventoryOrgId}/%22null%22/%22Y%22`,
    GET_RESTRICTEDLOCATORS: `${environment.baseUrl}20D/getRestrictedLocators/${InventoryOrgId}/%22null%22/%22Y%22`,
    GET_EMPLOYEETABLE: `${environment.baseUrl}23A/getEmployeesTable/${InventoryOrgId}/%22%22`,
    GET_LOCATIONS: `${environment.baseUrl}20D/getLocations/%22null%22/%22Y%22`,
    GET_ACCOUNT_ALIASES: `${environment.baseUrl}20D/getAccountAliases/${InventoryOrgId}`,
    GET_UNIT_MEASURES_CONVERSIONS: `${environment.baseUrl}20D/getUnitOfMeasuresConversions/${InventoryOrgId}/%22%22`,
    GET_ITEMS_REVISIONS: `${environment.baseUrl}20D/getItemRevisions/${InventoryOrgId}/%22%22`,
    GET_WORK_ORDER_OPERATIONS: `${environment.baseUrl}20D/getWorkOrdersoperations/${InventoryOrgId}/%22%22`,
    GET_ON_HAND_QUANTITIES: `${environment.baseUrl}20D/getOnHandQuantities/${InventoryOrgId}`,
    GET_SHIPPING_NETWORK: `${environment.baseUrl}20D/getShippingNetworks/${InventoryOrgId}`,
    GET_REASONS: `${environment.baseUrl}20D/getreasons`,
    GET_PURCHASING_PERIODS: `${environment.baseUrl}20D/getPurchasingPeriods/${InventoryOrgId}`,
    GET_GLPERIODS: `${environment.baseUrl}20D/getGLPeriods/${InventoryOrgId}`,
    GET_INVENTORY_PERIODS: `${environment.baseUrl}20D/getInventoryPeriods/${InventoryOrgId}/${organizationID}`,
    GET_DOCUMENT_FOR_RECEIVING: `${environment.baseUrl}20D/getDocumentsForReceiving/${InventoryOrgId}/%22null%22/%22Y%22`,
    GET_LOTS_TABLE: `${environment.baseUrl}22A/getLotsTableType/${InventoryOrgId}/%22%22`,
    GET_SERIAL_TABLE: `${environment.baseUrl}22A/getSerialTableType/${InventoryOrgId}/%22/468517/473573`,




}
export const EBS_API_METADATA = {
    METADATA_GLACCOUNT_API: `${environment.baseUrl}20D/getglaccountsmetadata`,
    METADATA_SUBINVENTORY_API: `${environment.baseUrl}20D/getSubinventories/metadata`,
    METADATA_GLPERIODS_API: `${environment.baseUrl}20D/getGLPeriodsmetadata`,
    METADATA_RESTRICTEDSUBINVENTORIES_API: `${environment.baseUrl}20D/getRestrictedSubinventories/metadata`,
    METADATA_RESTRICTEd_LOCATORS_API: `${environment.baseUrl}20D/getRestrictedLocators/metadata`,
    METADATA_LOCATIONS_API: `${environment.baseUrl}20D/getLocations/metadata`,
    METADATA_ACCOUNTALIASES_API: `${environment.baseUrl}20D/getAccountAliasesmetadata`,
    METADATA_UNIT_MEASURES_API: `${environment.baseUrl}20D/getUnitOfMeasuresConversionsmetadata`,
    METADATA_ITEM_REVISIONS_API: `${environment.baseUrl}20D/getItemRevisionsmetadata`,
    METADATA_WORK_ORDER_OPERATIONS_API: `${environment.baseUrl}20D/getWorkOrdersoperations/metadata`,
    METADATA_ONHAND_QUANTITIES: `${environment.baseUrl}20D/getOnHandQuantitiesmetadata`,
    METADATA_SHIPPING_NETWORK: `${environment.baseUrl}20D/getShippingNetworksmetadata`,
    METADATA_REASONS: `${environment.baseUrl}20D/getreasons/metadata`,
    METADATA_PURCHASING_PERIODS: `${environment.baseUrl}20D/getPurchasingPeriodsmetadata`,











    METADATA_INVENTORY_PERIODS_API: `${environment.baseUrl}20D/getInventoryPeriods/metadata`,
    METADATA_DOCUMENT_FOR_RECEIVING_API: `${environment.baseUrl}20D/getDocumentsForReceiving/metadata`,




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