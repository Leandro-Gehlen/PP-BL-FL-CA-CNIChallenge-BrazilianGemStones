

export type ValidationResult = {
    status: boolean,
    statusCode: number,
    errorMessage?: any,
    data?: any
}

export interface IUserFormValidation {
    exec(body: any): Promise<ValidationResult>
}