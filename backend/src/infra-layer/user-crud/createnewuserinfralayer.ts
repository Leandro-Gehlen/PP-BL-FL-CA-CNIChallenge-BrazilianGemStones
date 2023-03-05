import { UserModel } from "../../application-layer/contracts/user-entity-abstraction";
import { ICreateuserInfraLayer } from "../../application-layer/contracts/usercrudcontracs/createuserinfralayercontract";
import prisma from "../instances/db-instance";



export class CreateUserInfraLayer implements ICreateuserInfraLayer {
    async addUser(req: any): Promise<UserModel> {

        const user = await prisma.user.create({
            data: {
                firstName: req.firstName as string,
                lastName: req.lastName as string,
                email: req.email as string,
                password: req.password as string

            }
        })

        return user
    }
} 