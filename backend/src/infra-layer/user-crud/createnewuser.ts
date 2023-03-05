import { UserModel } from "../../application-layer/contracts/user-entity-abstraction";
import { ICreateuserInfraLayerAction } from "../../application-layer/contracts/usercrudcontracs/createuserinfralayercontract";
import prisma from "../instances/db-instance";

/*
const user = await prisma.user.create({
    data: { email: 'alice@prisma.io' },
  })
*/


export class CreateUserInfraLayer implements ICreateuserInfraLayerAction {
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