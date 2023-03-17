import { IController } from "../../application-layer/contracts/controllercontract";
import { httpResponseAbstraction } from "../../application-layer/contracts/httpresponsecontract";
import { UserGenerateTokensService } from "../../application-layer/services/auth/usergeneratetokensservice";
import { CreateUserService } from "../../application-layer/services/users/createuserservice";


export class CreateUserController implements IController {
    constructor(private readonly createUserService: CreateUserService, private readonly userGenerateTokensService: UserGenerateTokensService) { }
    async handle(HttpResquest: any): Promise<httpResponseAbstraction> {

        try {
            const user = await this.createUserService.createUser(HttpResquest)

            this.userGenerateTokensService.generateTokens(HttpResquest)

            return {
                statusCode: 201,
                body: {
                    status: true,
                    user
                }
            }
        } catch (e) {

            return {
                statusCode: 500,
                body: {
                    status: false,
                    msg: 'deu erro', e
                }
            }
        }
    }

}
