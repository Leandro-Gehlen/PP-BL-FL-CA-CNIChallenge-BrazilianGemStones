import { IController } from "../../application-layer/contracts/controllercontract";
import { httpResponseAbstraction } from "../../application-layer/contracts/httpresponsecontract";
import { DeleteUserService } from "../../application-layer/services/users/deleteuserservice";



export class DeleteUserController implements IController {
    constructor(private readonly deleteUserService: DeleteUserService) { }
    async handle(HttpResquest: any): Promise<httpResponseAbstraction> {
        console.log("Chega no controller")
        try {
            const user = await this.deleteUserService.deleteUser(HttpResquest)

            return {
                statusCode: 201,
                body: {
                    status: true,
                    message: "Usuário foi deletado"
                }
            }
        } catch (e) {

            return {
                statusCode: 500,
                body: {
                    status: false,
                    msg: 'deu erro no controller', e
                }
            }
        }
    }

}