import axiosClient from "./api"


export const postApi = {
  getPostById: async (id): Promise<any> => {
    const response = await axiosClient.get('/posts/'+id)
    return response
  }
}
