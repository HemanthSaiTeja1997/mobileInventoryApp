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
    GET_SUBINVENTORY: `${environment.baseUrl}20D/getSubinventories/${InventoryOrgId}/%22null%22/%22Y%22`,
    GET_LOCATORS: `${environment.baseUrl}23A/getLocatorsTable/${InventoryOrgId}/%22%22`,
    GET_GLPERIODS: `${environment.baseUrl}20D/getGLPeriods/${InventoryOrgId}`,
    GET_INVENTORY_PERIODS: `${environment.baseUrl}20D/getInventoryPeriods/${InventoryOrgId}/${organizationID}`,
    GET_DOCUMENT_FOR_RECEIVING: `${environment.baseUrl}20D/getDocumentsForReceiving/${InventoryOrgId}/%22null%22/%22Y%22`,
    GET_LOTS_TABLE: `${environment.baseUrl}22A/getLotsTableType/${InventoryOrgId}/%22%22`,



}
export const EBS_API_METADATA = {
    METADATA_SUBINVENTORY_API: `${environment.baseUrl}20D/getSubinventories/metadata`,
    METADATA_GLPERIODS_API: `${environment.baseUrl}20D/getGLPeriodsmetadata`,
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