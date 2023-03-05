import { httpResponseAbstraction } from "../httpresponsecontract";
import { UserModel } from "../user-entity-abstraction";

export interface IDeleteUserInfraLayer {
    deleteUserFromDb(user: UserModel): Promise<httpResponseAbstraction>
}