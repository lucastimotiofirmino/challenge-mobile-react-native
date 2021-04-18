import axios from 'axios'

export const ApiMarvelPublic = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public"
})