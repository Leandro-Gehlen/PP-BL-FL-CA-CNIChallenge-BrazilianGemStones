import { httpResponseAbstraction } from "../httpresponsecontract";
import { UserModel } from "../user-entity-abstraction";

export interface IUpdateUserDataInfraLayer {
    updateUserData(user: UserModel): Promise<httpResponseAbstraction>
}