import { httpResponseAbstraction } from "../httpresponsecontract";
import { UserModel } from "../user-entity-abstraction";

export interface IReadUserDataInfraLayer {
    getUserData(user: UserModel): Promise<httpResponseAbstraction>
}