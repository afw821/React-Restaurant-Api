import http from "./httpService";
import { apiUrl, deployedApiUrl } from "../config.json";

export function getWaitlist() {
  return http.get(deployedApiUrl + "/waitLists");
}

export function emptyWaitList() {
  return http.delete(deployedApiUrl + "/waitLists");
}
