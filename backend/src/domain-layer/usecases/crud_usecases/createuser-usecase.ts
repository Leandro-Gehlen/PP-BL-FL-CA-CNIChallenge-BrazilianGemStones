import { User } from "../../entities";

export interface CreateUser {
    create(): User
}