import { IController } from "../../application-layer/contracts/controllercontract";
import { httpResponseAbstraction } from "../../application-layer/contracts/httpresponsecontract";
import { ReadUserDataService } from "../../application-layer/services/users/readuserdataservice";



export class ReadUserDataController implements IController {
    constructor(private readonly readUserDataService: ReadUserDataService) { }
    async handle(HttpResquest: any): Promise<httpResponseAbstraction> {

        try {
            const userData = await this.readUserDataService.readUserData(HttpResquest)

            return {
                statusCode: 201,
                body: {
                    status: true,
                    userData
                }
            }
        } catch (e) {

            return {
                statusCode: 500,
                body: {
                    status: false,
                    msg: 'deu erro no controller do verbo get', e
                }
            }
        }
    }

}