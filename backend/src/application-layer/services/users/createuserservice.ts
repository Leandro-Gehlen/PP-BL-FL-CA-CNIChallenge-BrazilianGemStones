import { User } from "../../../domain-layer/entities/entities";
import { ICreateUser } from "../../../domain-layer/usecases/crud_usecases/createuser-usecase";
import { ICreateuserInfraLayerAction } from "../../contracts/usercrudcontracs/createuserinfralayercontract";

export class CreateUserService implements ICreateUser {
    constructor(createUserInfraLayerAction: ICreateuserInfraLayerAction) { }
    async createUser(HttpResquestBody: any): Promise<User> {

    }
}