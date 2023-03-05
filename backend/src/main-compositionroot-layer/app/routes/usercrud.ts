import { Response, Router, Request, request } from 'express';
import { MakeCreateUserController } from '../../factories/makeauthcontroller';


export default (router: Router): void => {
    router.post('/create', async (req: Request, res: Response) => {

        const controller = MakeCreateUserController()
        const httpResponse = await controller.handle(req.body)
        res.json(httpResponse);
    })
}