import { httpResponseAbstraction } from "../../application-layer/contracts/httpresponsecontract"
import { UserModel } from "../../application-layer/contracts/user-entity-abstraction"
import { IReadUserDataInfraLayer } from "../../application-layer/contracts/usercrudcontracs/readuserdatainfralayercontract"
import prisma from "../instances/db-instance"

export class ReadUserDataInfraLayer implements IReadUserDataInfraLayer {
    async getUserData(user: UserModel): Promise<httpResponseAbstraction> {

        try {
            const foundUser = await prisma.user.findUnique({
                where: { id: user.id }
            })

            return {
                statusCode: 200,
                body: {
                    status: true,
                    foundUser
                }
            }
        } catch (e) {

            return {
                statusCode: 500,
                body: {
                    status: false,
                    message: { e, Error }
                }
            }

        }
    }
}