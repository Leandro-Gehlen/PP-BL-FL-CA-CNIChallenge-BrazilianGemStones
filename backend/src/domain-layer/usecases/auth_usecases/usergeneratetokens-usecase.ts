import { User } from "../../entities"

export type Tokens = {
    token: string,
    refreshToken: string
}

export interface UserGenerateTokens {
    generateTokens(user: User): Tokens
}