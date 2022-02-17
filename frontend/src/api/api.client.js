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

  async createTask(task) {
    const { data } = await this.request.post("/create", task);

    return data;
  }

  async changeTaskSituation(taskId) {
    const { data } = await this.request.put(`/done/${taskId}`);

    return data;
  }
}
export default new ApiClient();
