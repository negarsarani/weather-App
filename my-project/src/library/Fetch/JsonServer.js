export async function postData(URL, endpoint, item) {
  try {
    let data = await fetch(`${URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getJson(url, endpoint) {
  try {
    let data = await fetch(`${url}/${endpoint}`);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
}
