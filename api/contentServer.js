import axios from "axios"

export default class ContentServer {
  constructor(uri) {
    this.api = axios.create({ baseURL: uri })
  }

  getData(branch = "master", path = "") {
    return this.api.get(`/${branch}/content/${path}`).then((response) => response.data)
  }
}
