import { LogIn } from './../../app/pages/log-in/log-in';
import { environment } from "../../environments/environment.prod"

const BASE_URL = environment.apiBaseUrl;

export const API_ENDPOINTS = {

  user: {
    register: `${BASE_URL}/auth/register`,
    LogIn: `${BASE_URL}/auth/login`
  }

}
