import { TokenVerified, UserTokensValidation } from "../../../domain-layer/usecases/auth_usecases/usertokensvalidation-usecase";

import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export class UserValidateTokensService implements UserTokensValidation {
    validateTokens(token: string): TokenVerified {

        const decoded = JWT.verify(
            token,
            process.env.JWT_SECRET_KEY as string
        )
        if (decoded) {
            return { status: true, data: decoded }
        }
        return { status: false }
    }
}