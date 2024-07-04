import axiosClient from "./api"


export const technologyApi = {
  getAllTechnology: async (): Promise<any> => {
    const response = await axiosClient.get('/technologies')
    return response.data
  }
}
