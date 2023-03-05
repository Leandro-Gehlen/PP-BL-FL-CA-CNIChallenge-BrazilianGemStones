import { User } from "../../entities";

export interface DeleteUser {
    deleteUser(user: User): boolean
}