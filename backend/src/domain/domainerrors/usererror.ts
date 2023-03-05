export type UserError = {
    statusCode: string
    errorMessage: {
        errorMessage: string
        error: Error
    }
}