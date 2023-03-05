import { IController } from "../../application-layer/contracts/controllercontract";
import { httpResponseAbstraction } from "../../application-layer/contracts/httpresponsecontract";
import { UpdateUserDataService } from "../../application-layer/services/users/updateuserdataservice";




export class UpdateUserDataController implements IController {
    constructor(private readonly updateUserDataService: UpdateUserDataService) { }
    async handle(HttpResquest: any): Promise<httpResponseAbstraction> {

        try {
            const updatedUser = await this.updateUserDataService.updateUser(HttpResquest)

            return {
                statusCode: 201,
                body: {
                    status: true,
                    updatedUser
                }
            }
        } catch (e) {

            return {
                statusCode: 500,
                body: {
                    status: false,
                    msg: 'deu erro no controller do verbo update', e
                }
            }
        }
    }

}