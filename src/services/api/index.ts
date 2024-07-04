import axios from 'axios'
import { toast } from 'react-toastify'
// import { getAccessToken } from 'utils/auth'
import { API_BASE_URL } from '../../configs'
import { httpStatus } from '../../constants/common'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNzZkODNiMDY2MDMwNzlhZjEyNGU5YjI4M2I2NDM4N2NhZjYwZTRmNGRkZWJiZGQ0ODI3OTA1YzUyNGQ1ZTE2YmUxZWNhYzNlNTE4NDFkNWEiLCJpYXQiOjE3MTkxOTg2ODcuMTQzNDE3LCJuYmYiOjE3MTkxOTg2ODcuMTQzNDE5LCJleHAiOjE3NTA3MzQ2ODcuMTM5NzA3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.GYsO0AXCIDxftndD8NCGNBL_-IvR0jDHZBa1ureGiFN8bkn6vvIS_vqrzfvxwRqsb95VvHi3t51x37k0NSBlEZ1L35BVU2gNzPoTmypBbXvi_l87vRiN6NsgckKA5c-GrnJ8-ipES69Vkr_rgpufQmCMUenwmN58M4LpW4sLWh5ZQ9-Fo69wLyn_LCb6aQik9xJQtWRa7Qoy4GRswJNGsg6KkEYbErmDcso572dSPw-EvFrca-SCuWeyst4EBGLSgZlKJOSF3b0o8d1hk1j93Ll26tzvhssyyYwzWLVzA8rixkJCjrNOktI9VmxvAZhMKaGdh0iz2kA5-m5f9rwt9MzNlWOlHXCfYMn1Ogv0MzMXvaeJTLzOF9AkZVxPKFmISvSz3bYm79GOF15uJdyrnnbNfjip1kDloLYEHpQXG0kcYiXVDDgXNGeaDAD6Ya_2pV7mY7P5D3YiUD9-HvWAF_69bmZAVoxQDLDxmF_GWt2Tnw10Jh-xp2GZi48PVIEn5ZJNodPHnW91DVUzbcbpF9uWyX2RN6FEPtlQwarBaPYo_1ypKRpZbQMOKLjVfrJxoauC72hE5txSsEpUcnit3V5jop5Bv9lzULieEx3h49gDNgyZqDiKGB2Cp8E5dOe1adiwyewJWX55ZhgZfYp4-q62C9wuNdYW7Wtx3VdjrTk';
const axiosClient = axios.create({
  baseURL: `${API_BASE_URL}/`,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  }
})

axiosClient.interceptors.request.use(
  async function (config: any) {
    config.headers.Authorization = `Bearer ${token}`
    config.headers['Accept-Language'] = localStorage.getItem('i18nextLng')

    return config
  },
  async function (error) {
    return await Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    if (response.config.url == '/login') {
      const userJSON = JSON.stringify(response.data.data.user_info)
      localStorage.setItem('user_info', userJSON)
    }
    return response?.data ?? {}
  },
  async function (error) {
    const errorResponse = error.response.data
    if (error.response.status === httpStatus.UNAUTHORIZED) {
      setHeader('')
    }
    if (
      (errorResponse?.meta.code === httpStatus.INTERNAL_SERVER_ERROR ||
        error.response.status === httpStatus.HTTP_NOTFOUND ||
        error.response.status === httpStatus.UNAUTHORIZED) &&
      errorResponse?.meta.error_message !== null &&
      typeof errorResponse?.meta.error_message === 'string'
    ) {
      const message = errorResponse.meta.error_message
      toast.error(message)
    }
    return await Promise.reject(errorResponse)
  }
)

export const setHeader = (authToken: any) => {
  axiosClient.defaults.headers.common.Authorization = `${authToken.token_type} ${authToken.access_token}`
  window.localStorage.setItem('auth.token', JSON.stringify(authToken))
}

if (window.localStorage.getItem('auth.token')) {
  const authToken = JSON.parse(window.localStorage.getItem('auth.token') || '')
  setHeader(authToken)
}

export default axiosClient
