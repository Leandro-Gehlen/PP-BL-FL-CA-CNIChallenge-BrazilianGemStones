import { IController } from "../../application-layer/contracts/controllercontract";
import { httpResponseAbstraction } from "../../application-layer/contracts/httpresponsecontract";


export class AuthController implements IController {
    async handle(HttpResquest: any): Promise<httpResponseAbstraction> {

    }
}