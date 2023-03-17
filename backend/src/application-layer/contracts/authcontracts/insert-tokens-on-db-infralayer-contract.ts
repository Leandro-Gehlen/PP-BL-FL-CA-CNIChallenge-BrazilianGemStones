import { Tokens } from "../../../domain-layer/usecases/auth_usecases/usergeneratetokens-usecase";

export type TokenStatus = {
    status: boolean,
    data?: Tokens
    error?: Error,

}

export interface IInsertTokensOnDbInfraLayer {
    exec(tokens: Tokens): Promise<TokenStatus>
}