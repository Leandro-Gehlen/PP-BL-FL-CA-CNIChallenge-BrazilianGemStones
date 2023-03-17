import { TokenStatus } from "../../../application-layer/contracts/authcontracts/insert-tokens-on-db-infralayer-contract"
import { User } from "../../entities"

export type Tokens = {
    token: string,
    refreshToken: string,
}

export interface UserGenerateTokensUseCase {
    generateTokens(user: User): Promise<Tokens | TokenStatus | undefined>
}