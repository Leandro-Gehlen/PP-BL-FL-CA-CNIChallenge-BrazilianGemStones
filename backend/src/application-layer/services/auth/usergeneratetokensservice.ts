import { User } from "../../../domain-layer/entities";
import { Tokens, UserGenerateTokens } from "../../../domain-layer/usecases/auth_usecases/usergeneratetokens-usecase";
import { IInsertTokensOnDbInfraLayer, TokenStatus } from "../../contracts/authcontracts/insert-tokens-on-db-infralayer-contract";

import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';


dotenv.config()

export class UserGenerateTokensService implements UserGenerateTokens {
    constructor(private readonly insertTokensOnDbInfraLayer: IInsertTokensOnDbInfraLayer) { }
    async generateTokens(user: User): Promise<Tokens | TokenStatus | undefined> {
        try {
            const token = JWT.sign(
                { email: user.email, password: user.password },
                process.env.JWT_SECRET_KEY as string,
                { expiresIn: '2h' }
            )
            const refreshToken = JWT.sign(
                { email: user.email, password: user.password },
                process.env.SECRET_KEY as string,
                { expiresIn: '2160h' }
            )
            const tokens = {
                token,
                refreshToken
            }
            const insertedToken = await this.insertTokensOnDbInfraLayer.exec(tokens)

            if (insertedToken.status === true) {
                return { token, refreshToken }
            }

        } catch (e: any) {

            return {
                status: false,
                error: e
            }

        }


    }
}