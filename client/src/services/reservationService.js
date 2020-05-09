import http from "./httpService";
import { apiUrl, deployedApiUrl } from "../config.json";

export function getReservations() {
  return http.get(deployedApiUrl + "/tables");
}

export function makeReservation(name, email, phoneNumber) {
  const obj = {
    name,
    email,
    phoneNumber,
  };
  return http.post(deployedApiUrl + "/tables", obj);
}

export function emptyReservations() {
  return http.delete(deployedApiUrl + "/tables");
}
