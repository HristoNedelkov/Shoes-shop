const apiKey = "AIzaSyDbEQna-gYP9C9BJk1p0l_B4TJ8WY86bMY";
const dataBaseUrl = "https://shoe-store-a6740.firebaseio.com/";

 
const commentServices = {
  async add(commentData) {
    let res = await fetch(`${dataBaseUrl}/comments.json`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    let data = await res.json();
    return data;
  },
  async getAll() {
    let res = await fetch(`${dataBaseUrl}/comments.json`);
    let data = await res.json();
    if (!data) {
      return {};
    }
    return Object.keys(data).map((key) => ({ key, ...data[key] }));
  }
}; 