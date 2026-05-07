import { LogIn } from './../../app/pages/log-in/log-in';
import { environment } from "../../environments/environment.prod"

const BASE_URL = environment.apiBaseUrl;

export const API_ENDPOINTS = {

  user: {
    registerUser: `${BASE_URL}/auth/register`,
    LogInUser: `${BASE_URL}/auth/login`
  }

}
