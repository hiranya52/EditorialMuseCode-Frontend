import { environment } from "../../environments/environment.prod"

const BASE_URL = environment.apiBaseUrl;

export const API_ENDPOINTS = {

  user: {
    register: `${BASE_URL}/auth/register`,
    LogIn: `${BASE_URL}/auth/login`
  },

  feed: {
    getAllCategories: `${BASE_URL}/api/categories`,
    personalized: `${BASE_URL}/api/interests`
  },

  profile: {
    getUserProfile: (userId: number) => `${BASE_URL}/profile/${userId}`,
    updateUserProfile: (userId: number) => `${BASE_URL}/profile/${userId}`
  }


}
