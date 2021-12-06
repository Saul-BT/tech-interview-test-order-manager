export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    TRACE = 'TRACE',
    CONNECT = 'CONNECT',
}

export function getHttpHeadersWithAuth(): Headers {
    const { API_KEY, API_SECRET } = process.env;
    const token = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');
    const headers = new Headers();
    
    headers.append('Authorization', `Basic ${token}`);
    headers.append('X-Shopify-Access-Token', API_SECRET!);


    return headers;
}