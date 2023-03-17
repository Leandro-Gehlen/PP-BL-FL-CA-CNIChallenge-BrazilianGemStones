import { IController } from "../../application-layer/contracts/controllercontract";
import { UserGenerateTokensService } from "../../application-layer/services/auth/usergeneratetokensservice";
import { CreateUserService } from "../../application-layer/services/users/createuserservice";
import { InsertTokensOnDbInfraLayer } from "../../infra-layer/auth/insertTokensOnDbInfraLayer";
import { CreateUserInfraLayer } from "../../infra-layer/user-crud/createnewuserinfralayer";
import { CreateUserController } from "../../presentation-layer/controllers/createusercontroller";


export const MakeCreateUserController = (): IController => {

    const loader = new CreateUserInfraLayer()
    const service = new CreateUserService(loader)
    const loadToken = new InsertTokensOnDbInfraLayer()
    const tokensService = new UserGenerateTokensService(loadToken)
    const controller = new CreateUserController(service, tokensService)

    return controller

}

