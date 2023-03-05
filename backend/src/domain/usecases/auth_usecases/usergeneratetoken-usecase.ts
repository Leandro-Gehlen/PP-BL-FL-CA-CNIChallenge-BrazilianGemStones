export type Token = {
    token: string
}

export interface UserGenerateToken {
    generateToken(): Token
}