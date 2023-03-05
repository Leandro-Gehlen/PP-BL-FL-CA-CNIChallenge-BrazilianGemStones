import { IController } from "../../application-layer/contracts/controllercontract";
import { UpdateUserDataService } from "../../application-layer/services/users/updateuserdataservice";
import { UpdateUserDataInfraLayer } from "../../infra-layer/user-crud/updateuserdatainfralayer";
import { UpdateUserDataController } from "../../presentation-layer/controllers/updateuserdatacontroller";


export const MakeUpdateUserDataController = (): IController => {

    const loader = new UpdateUserDataInfraLayer()
    const service = new UpdateUserDataService(loader)
    const controller = new UpdateUserDataController(service)

    return controller

}