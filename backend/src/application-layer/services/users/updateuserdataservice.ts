import { User } from "../../../domain-layer/entities";
import { IUpdateUserData } from "../../../domain-layer/usecases/crud_usecases/updateuser-usecase";
import { UpdateUserDataInfraLayer } from "../../../infra-layer/user-crud/updateuserdatainfralayer";
import { httpResponseAbstraction } from "../../contracts/httpresponsecontract";

export class UpdateUserDataService implements IUpdateUserData {

    constructor(private readonly updateUserDataInfraLayer: UpdateUserDataInfraLayer) { }

    async updateUser(user: User): Promise<httpResponseAbstraction> {
        console.log('Chega aqui')
        const updatedUser = await this.updateUserDataInfraLayer.updateUserData(user)

        return updatedUser

    }
}


