import { User } from "../../entities";

export interface ReadUser {
    readUserData(user: User): Promise<User>
}