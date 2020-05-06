import http from "./httpService";
// import { apiUrl } from "../config.json";

const apiUrl = "http://localhost:8800/api";

export function getWaitlist() {
  return http.get(apiUrl + "/waitLists");
}

export function emptyWaitList() {
  return http.delete(apiUrl + "/waitLists");
}
