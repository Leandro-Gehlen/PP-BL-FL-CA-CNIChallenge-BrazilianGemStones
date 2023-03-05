import { IUserFormValidation, ValidationResult } from "../../../domain-layer/usecases/validations_usecase/userformvalidation-usecase";

import { z, ZodError } from 'zod';


export class UserFormValidationService implements IUserFormValidation {
    async exec(body: any): Promise<ValidationResult> {
        const User = z.object({
            fistName: z.string().trim().min(2, { message: "São esperados ao menos 2 caracters" }),
            lastName: z.string().trim().min(2, { message: "São esperados ao menos 2 caracters" }),
            email: z.string().trim().email(),
            password: z.string().trim().min(6, { message: "São esperados ao menos 6 caracters" })

        })
        try {

            const data = User.parse(body)
            return {
                status: true,
                statusCode: 200,
                data: data
            }

        } catch (e: any) {
            return {
                status: false,
                statusCode: 500,
                errorMessage: { e, ZodError },
                data: null
            }

        }
    }
}
