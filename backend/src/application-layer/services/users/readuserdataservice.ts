import { User } from "../../../domain-layer/entities";
import { ReadUser } from "../../../domain-layer/usecases/crud_usecases/readuser-usecase";
import { ReadUserDataInfraLayer } from "../../../infra-layer/user-crud/readuserdatainfralayer";
import { httpResponseAbstraction } from "../../contracts/httpresponsecontract";


export class ReadUserDataService implements ReadUser {

    constructor(private readonly readUserDataInfraLayer: ReadUserDataInfraLayer) { }

    async readUserData(user: User): Promise<httpResponseAbstraction> {

        const userData = await this.readUserDataInfraLayer.getUserData(user)

        return userData

    }
}


