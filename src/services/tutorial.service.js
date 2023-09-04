import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("https://bao.devops.ameladev.click/api/tutorials");
  }

  get(id) {
    return http.get(`https://bao.devops.ameladev.click/api/tutorials/${id}`);
  }

  create(data) {
    return http.post("https://bao.devops.ameladev.click/api/tutorials", data);
  }

  update(id, data) {
    return http.put(`https://bao.devops.ameladev.click/api/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`https://bao.devops.ameladev.click/api/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`https://bao.devops.ameladev.click/api/tutorials`);
  }

  findByTitle(title) {
    return http.get(`https://bao.devops.ameladev.click/api/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();