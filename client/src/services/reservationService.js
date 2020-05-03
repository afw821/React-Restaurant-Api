import http from "./httpService";
// import { apiUrl } from "../config.json";

const apiUrl = "http://localhost:8800/api";

export function getReservations() {
  return http.get(apiUrl + "/tables");
}

export function makeReservation(name, email, phoneNumber) {
  const obj = {
    name,
    email,
    phoneNumber,
  };
  console.log("make reservation", obj);
  return http.post(apiUrl + "/tables", obj);
}
