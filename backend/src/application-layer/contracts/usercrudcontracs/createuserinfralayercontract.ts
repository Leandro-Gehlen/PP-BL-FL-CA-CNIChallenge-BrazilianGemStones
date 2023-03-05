import { UserModel } from "../user-entity-abstraction";

export interface ICreateuserInfraLayerAction {
    addUser(HttpResquestBody: any): Promise<UserModel>
}