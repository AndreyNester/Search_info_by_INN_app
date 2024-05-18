import axios, { CreateAxiosDefaults } from "axios";
import { API_KEY, BASE_URL } from "./constants";

const options : CreateAxiosDefaults = {
  baseURL : BASE_URL,
  headers : {
    'Authorization' : `Token ${API_KEY}`,
    "Content-Type": "application/json",
    'Accept': "application/json",
  },
}

export const getOrganizationInfoApi = axios.create(options);

