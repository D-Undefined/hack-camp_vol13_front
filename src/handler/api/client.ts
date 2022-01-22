import axios, { AxiosInstance } from "axios"
import getConfig from "next/config"
const {publicRuntimeConfig} = getConfig()

export const axiosClient = (): AxiosInstance => {
  return axios.create({
    baseURL: publicRuntimeConfig.API_BASE_URL
  })
}