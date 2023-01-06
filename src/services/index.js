import axios from "axios";

export default axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': process.env.VUE_APP_API_TOKEN

  }
})