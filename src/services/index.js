import axios from "axios";
const url = "http://my-json-server.typicode.com/workinideas/vagafrontendteste/";

async function getMenu() {
  let path = "menus";

  try {
    const resposta = await axios.get(url + path);
    return Promise.resolve(resposta);
  } catch (e) {
    return Promise.reject(e);
  }
}

async function getItems(id) {
  let path = `items/${id}`;
  try {
    const resposta = await axios.get(url + path);
  
    return Promise.resolve(resposta);
  } catch (e) {
    return Promise.reject(e);
  }
}
const service = {
  getItems: getItems,
  getMenu: getMenu,
};

export default service;
