import { User } from "../../../domain-layer/entities/entities";
import { ICreateUser } from "../../../domain-layer/usecases/crud_usecases/createuser-usecase";
import { ICreateuserInfraLayer } from "../../contracts/usercrudcontracs/createuserinfralayercontract";

export class CreateUserService implements ICreateUser {
    constructor(private readonly createUserInfraLayer: ICreateuserInfraLayer) { }

    async createUser(HttpResquestBody: any): Promise<User> {

        const user = this.createUserInfraLayer.addUser(HttpResquestBody)
        return user
    }
}