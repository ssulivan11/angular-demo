/* tslint:disable */

export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export default class Users {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  }[];
}