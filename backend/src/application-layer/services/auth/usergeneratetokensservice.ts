import { User } from "../../../domain-layer/entities";
import { Tokens, UserGenerateTokens } from "../../../domain-layer/usecases/auth_usecases/usergeneratetokens-usecase";

import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';

dotenv.config()

export class UserGenerateTokensService implements UserGenerateTokens {
    generateTokens(user: User): Tokens {
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


        return { token, refreshToken }
    }
}