import axios from "axios";
import { API_URL } from "../config";

export default axios.create({
  baseURL: API_URL+'/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});
