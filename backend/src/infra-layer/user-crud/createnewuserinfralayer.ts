import { UserModel } from "../../application-layer/contracts/user-entity-abstraction";
import { ICreateuserInfraLayer } from "../../application-layer/contracts/usercrudcontracs/createuserinfralayercontract";
import prisma from "../instances/db-instance";



export class CreateUserInfraLayer implements ICreateuserInfraLayer {
    async addUser(HttpResquestBody: any): Promise<UserModel> {
        const body = HttpResquestBody
        const user = await prisma.user.create({
            data: {
                firstName: body.firstName as string,
                lastName: body.lastName as string,
                email: body.lastName as string,
                password: body.lastName as string

            }
        })

        return user
    }
} 