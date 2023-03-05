import { httpResponseAbstraction } from "../../application-layer/contracts/httpresponsecontract";
import { UserModel } from "../../application-layer/contracts/user-entity-abstraction";
import { IUpdateUserDataInfraLayer } from "../../application-layer/contracts/usercrudcontracs/updateuserdatainfralayercontract";
import prisma from "../instances/db-instance";

export class UpdateUserDataInfraLayer implements IUpdateUserDataInfraLayer {
    async updateUserData(user: UserModel): Promise<httpResponseAbstraction> {

        try {


            const updatedUser = await prisma.user.update({
                where: { id: user.id },
                data: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    password: user.password
                }
            })

            return {
                statusCode: 200,
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
                    message: { e, Error }
                }
            }

        }
    }
}

