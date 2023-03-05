import { User } from "../../entities";

export interface IUpdateUserData {
    updateUser(user: User): Promise<User>
}