const request = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(`Request failed: ${error.message}`);
  }
};

export default request;
