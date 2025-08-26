export const ORGANIZATION_CONSTANTS = {
    TABLE_NAME: 'organizations',
    API_ENDPOINT: '23A/getInventoryOrganizationsTable'
}

export const LOGIN_CONSTANTS = {
    TABLE_NAME: 'loginUser',
    API_ENDPOINT: '20D/login'
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

export const LOGIN_MESSAGES = {
    LOGIN_INVALID_MESSAGE: 'Please fill all required fields',
    LOGIN_FAILED_MESSAGE: 'Login failed. Try again.'
}

export const ROUTES ={
    ORGANIZATION : '/organization'
}