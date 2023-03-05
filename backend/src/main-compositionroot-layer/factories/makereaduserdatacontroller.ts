import { IController } from "../../application-layer/contracts/controllercontract"
import { ReadUserDataService } from "../../application-layer/services/users/readuserdataservice"
import { ReadUserDataInfraLayer } from "../../infra-layer/user-crud/readuserdatainfralayer"
import { ReadUserDataController } from "../../presentation-layer/controllers/readuserdatacontroller"




export const MakeReadUserDataController = (): IController => {

    const loader = new ReadUserDataInfraLayer()
    const service = new ReadUserDataService(loader)
    const controller = new ReadUserDataController(service)

    return controller

}
