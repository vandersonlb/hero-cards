import axios from "axios";

export default axios.create({
  baseURL: process.env.VUE_APP_AIRTABLE_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + process.env.VUE_APP_AIRTABLE_TOKEN
  }
})
