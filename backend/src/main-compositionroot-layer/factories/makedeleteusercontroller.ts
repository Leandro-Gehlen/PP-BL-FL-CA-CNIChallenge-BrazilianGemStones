import { IController } from "../../application-layer/contracts/controllercontract";
import { DeleteUserService } from "../../application-layer/services/users/deleteuserservice";
import { DeleteUserInfraLayer } from "../../infra-layer/user-crud/deleteuserinfralayer";
import { DeleteUserController } from "../../presentation-layer/controllers/deleteusercontroller";



export const MakeDeleteUserController = (): IController => {

    const loader = new DeleteUserInfraLayer()
    const service = new DeleteUserService(loader)
    const controller = new DeleteUserController(service)

    return controller

}
