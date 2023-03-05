import { httpResponseAbstraction } from "../../application-layer/contracts/httpresponsecontract";
import { UserModel } from "../../application-layer/contracts/user-entity-abstraction";
import { IDeleteUserInfraLayer } from "../../application-layer/contracts/usercrudcontracs/deleteuserinfralayercontract";
import prisma from "../instances/db-instance";

export class DeleteUserInfraLayer implements IDeleteUserInfraLayer {
    async deleteUserFromDb(user: UserModel): Promise<httpResponseAbstraction> {

        try {
            const deletedUser = await prisma.user.delete({
                where: { id: user.id }
            })

            return {
                statusCode: 200,
                body: {
                    status: true,
                    message: "Usuário foi deletado com sucesso"
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