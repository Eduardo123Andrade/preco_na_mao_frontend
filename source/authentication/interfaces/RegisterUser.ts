import { User } from "core/interfaces";

export interface RegisterUser extends User {
  password: string
  confirmPassword: string
}