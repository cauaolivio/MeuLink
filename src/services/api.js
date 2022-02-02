import axios from "axios";

export const key = "2790c1875ef34ddcd4898437d060b182c075a973";

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
})

export default api;