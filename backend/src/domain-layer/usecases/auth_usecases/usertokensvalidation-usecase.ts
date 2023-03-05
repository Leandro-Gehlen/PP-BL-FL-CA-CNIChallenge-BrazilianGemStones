

export type TokenVerified = {
    status: boolean,
    data?: any
}
export interface UserTokensValidation {
    validateTokens(token: string): TokenVerified
}