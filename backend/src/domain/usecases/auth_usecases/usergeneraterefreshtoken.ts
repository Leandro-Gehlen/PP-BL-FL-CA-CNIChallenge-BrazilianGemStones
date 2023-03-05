import { Token } from "./usergeneratetoken-usecase";

export interface UserGenerateRefrashToken {
    generateRefreshToken(): Token
}