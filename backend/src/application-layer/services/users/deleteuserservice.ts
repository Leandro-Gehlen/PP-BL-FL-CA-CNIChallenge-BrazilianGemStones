import { User } from "../../../domain-layer/entities";
import { IDeleteUser } from "../../../domain-layer/usecases/crud_usecases/deleteuser-usecase";
import { DeleteUserInfraLayer } from "../../../infra-layer/user-crud/deleteuserinfralayer";
import { httpResponseAbstraction } from "../../contracts/httpresponsecontract";



export class DeleteUserService implements IDeleteUser {
    constructor(private readonly deleteUserInfraLayer: DeleteUserInfraLayer) { }
    async deleteUser(user: User): Promise<httpResponseAbstraction> {
        console.log("Chega no serviço")
        const deletedUser = await this.deleteUserInfraLayer.deleteUserFromDb(user)
        return deletedUser

    }
}