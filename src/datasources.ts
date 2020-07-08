import axios from 'axios';

export interface CreateAccountResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    username: string;
  };
}

export interface CreateAccountData {
  username: string;
  password: string;
}

type LoginData = CreateAccountData;
type LoginResponse = CreateAccountResponse;

export const createAccount = (data: CreateAccountData):
  Promise<CreateAccountResponse> => axios.post(
    'http://localhost:8000/signup/', data
  ).then(({data}) => data);

export const authenticate = (data: LoginData):
  Promise<LoginResponse> => axios.post(
    'http://localhost:8000/login/', data
  ).then(({data}) => data);

export const retrieveClassroomsList = (token: string) => axios.get(
  'http://localhost:8000/classrooms/',
  {
    headers: {
      'Authorization': token
    }
  }
).then(({data}) => data);

