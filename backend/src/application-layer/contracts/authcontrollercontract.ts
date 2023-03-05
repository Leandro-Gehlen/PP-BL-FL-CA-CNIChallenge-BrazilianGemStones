import { httpResponse } from "./httpresponsecontract";

export interface IAuthController {
    handle(httpRequest: any): Promise<httpResponse>
}