import { IController } from "../../application-layer/contracts/controllercontract";
import { CreateUserService } from "../../application-layer/services/users/createuserservice";
import { CreateUserInfraLayer } from "../../infra-layer/user-crud/createnewuserinfralayer";
import { CreateUserController } from "../../presentation-layer/controllers/createusercontroller";


export const MakeCreateUserController = (): IController => {

    const loader = new CreateUserInfraLayer()
    const service = new CreateUserService(loader)
    const controller = new CreateUserController(service)

    return controller

}

