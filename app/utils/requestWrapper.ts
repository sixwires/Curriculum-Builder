const getData = async (url: string, options = {}) => {
  console.log(options);
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (error: any) {
    throw new Error(`Request failed: ${error.message}`);
  }
};

async function postData(url = '', body = {}) {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
  };

  const response = await fetch(url, requestOptions);
  return response.json();
}

export { getData, postData };
