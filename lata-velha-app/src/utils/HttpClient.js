const HttpClient = () => {

  const get = async (url) => {
    const response = await fetch(url);

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

  return {
    get,
    post,
    put
  }
}

export default HttpClient;