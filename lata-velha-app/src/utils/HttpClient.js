const HttpClient = () => {

  const get = async (url, urlParams, headers) => {
    if (typeof urlParams === 'undefined' || urlParams === null) {
      urlParams = '';
    }
    const response = await fetch(`${url}` + new URLSearchParams(urlParams), {
      method: 'GET',
      headers: {...headers}
    });
    
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
  const remove = async (url) => {
    const response = await fetch(url,
      {
        method: 'DELETE',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  return {
    get,
    post,
    put,
    remove
  }
}

export default HttpClient;