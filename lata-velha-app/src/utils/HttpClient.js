const HttpClient = () => {

  const get = async (url ,id) => {
    if (typeof id === 'undefined') {
      id = '';
    }
    const response = await fetch(`${url}/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  const post = async (url, body, headers) => {
    const response = await fetch(url,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {...headers}
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  const put = async (url, headers, body) => {
    const response = await fetch(url,
      {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {...headers}
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  // delete is a reserved js keyword
  const remove = async (url, headers, body) => {

  }

  return {
    get,
    post,
    put,
    remove
  }
}

export default HttpClient;