import axios from "axios";

class ApiClient {
  request = axios.create({
    baseURL: "http://localhost:3334/tasks",
  });
  async getAllDoneTasks() {
    const { data } = await this.request.get("/done");

    return data;
  }

  async getAllUndoneTasks() {
    const { data } = await this.request.get("/undone");

    return data;
  }
}
export default new ApiClient();
