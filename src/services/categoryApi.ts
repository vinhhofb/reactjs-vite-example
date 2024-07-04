import axiosClient from "./api"


export const categoryApi = {
  getAllCategory: async (): Promise<any> => {
    const response = await axiosClient.get('/categories')
    return response.data
  }
}
