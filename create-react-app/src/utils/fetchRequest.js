const fetchRequest = async (url, method, payload = null) => {
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };
  const body = payload ? JSON.stringify(payload) : null;

  const response = await fetch(url, { method, body, headers });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || response.statusText);
  }
  return response.json();
};

const fetchRequestNotStringify = async (url, method, payload = null) => {
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };
  const body = payload ? payload : null;

  const response = await fetch(url, { method, body, headers });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || response.statusText);
  }
  return response.json();
};

export const postRequest = (url, payload) => fetchRequest(url, 'POST', payload);
export const postRequestNotStringify = (url, payload) => fetchRequestNotStringify(url, 'POST', payload);
export const putRequest = (url, payload) => fetchRequest(url, 'PUT', payload);
export const putRequestNotStringify = (url, payload) => fetchRequestNotStringify(url, 'PUT', payload);
export const getRequest = (url) => fetchRequest(url, 'GET');
export const deleteRequest = (url) => fetchRequest(url, 'DELETE');
