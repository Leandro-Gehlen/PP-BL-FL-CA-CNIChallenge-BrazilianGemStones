import { User } from "../../entities";



export interface ICreateUser {
    createUser(HttpResquestBody: any): Promise<User>
}