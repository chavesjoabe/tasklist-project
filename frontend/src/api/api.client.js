import axios from "axios";

class ApiClient {
  request = axios.create({
    baseURL: "http://localhost:3334/",
  });
  async getAllDoneTasks() {
    const { data } = await this.request.get("tasks/done");

    return data;
  }

  async getAllUndoneTasks() {
    const { data } = await this.request.get("tasks/undone");

    return data;
  }

  async createTask(task) {
    const { data } = await this.request.post("tasks/create", task);

    return data;
  }

  async changeTaskSituation(taskId) {
    const { data } = await this.request.put(`tasks/done/${taskId}`);

    return data;
  }

  async getAllDates() {
    const { data } = await this.request.get("/dates");

    return data;
  }
  async getAllTags() {
    const { data } = await this.request.get("/tags");

    return data;
  }
}
export default new ApiClient();
