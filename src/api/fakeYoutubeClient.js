import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get("/videos/search.json");
  }
  async videos() {
    return axios.get("/videos/popular.json");
  }
  async channels() {
    return axios.get("/videos/channel.json");
  }
  async playlist() {
    return axios.get("/videos/related.json");
  }
}
