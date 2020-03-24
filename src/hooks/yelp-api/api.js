import queryString from 'query-string'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}