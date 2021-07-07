const defaultHeaders = {
    Accept: "application/json",
    'content-type': "application/json"
};

export const get = (apiUrl, headers) => {
    return fetch(`${apiUrl}`, {
        method : "GET",
        headers: headers || defaultHeaders
    })
};