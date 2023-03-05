import { UserModel } from "../user-entity-abstraction";

export interface ICreateuserInfraLayer {
    addUser(HttpResquestBody: any): Promise<UserModel>
}