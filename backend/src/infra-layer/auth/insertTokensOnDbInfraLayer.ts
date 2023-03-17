
import { IInsertTokensOnDbInfraLayer, TokenStatus } from "../../application-layer/contracts/authcontracts/insert-tokens-on-db-infralayer-contract";
import { UserModel } from "../../application-layer/contracts/user-entity-abstraction";
import { Tokens } from "../../domain-layer/usecases/auth_usecases/usergeneratetokens-usecase";
import prisma from "../instances/db-instance";

export class InsertTokensOnDbInfraLayer implements IInsertTokensOnDbInfraLayer {
    async exec(user: UserModel, tokens: Tokens): Promise<TokenStatus | undefined> {

        try {

            const sucess = await prisma.user.update({
                where: { id: user.id },
                data: {
                    token: tokens.token,
                    refreshToken: tokens.refreshToken
                }
            })


            if (sucess) {
                console.log("Chega aqui", sucess)
                return {
                    status: true,
                    data: {
                        token: sucess.token as string,
                        refreshToken: sucess.refreshToken as string
                    }
                }
            }

        } catch (e: any) {
            return {
                status: false,
                error: e
            }
        }
    }


}