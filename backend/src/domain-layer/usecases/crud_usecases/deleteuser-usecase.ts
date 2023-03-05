import { httpResponseAbstraction } from "../../../application-layer/contracts/httpresponsecontract";
import { User } from "../../entities";

export interface IDeleteUser {
    deleteUser(user: User): Promise<httpResponseAbstraction>
}