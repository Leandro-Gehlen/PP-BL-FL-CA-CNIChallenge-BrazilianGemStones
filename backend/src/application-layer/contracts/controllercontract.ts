import { httpResponseAbstraction } from "./httpresponsecontract";

export interface IController {
    handle(httpRequest: any): Promise<httpResponseAbstraction>
}