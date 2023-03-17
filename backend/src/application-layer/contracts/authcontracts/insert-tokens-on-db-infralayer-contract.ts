import { Tokens } from "../../../domain-layer/usecases/auth_usecases/usergeneratetokens-usecase";
import { UserModel } from "../user-entity-abstraction";

export type TokenStatus = {
    status: boolean,
    data?: Tokens
    error?: Error,

}

export interface IInsertTokensOnDbInfraLayer {
    exec(user: UserModel, tokens: Tokens): Promise<TokenStatus>
}