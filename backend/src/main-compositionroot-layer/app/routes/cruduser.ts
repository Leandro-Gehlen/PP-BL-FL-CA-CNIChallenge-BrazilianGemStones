import { Response, Router, Request } from 'express';
import { MakeCreateUserController } from '../../factories/makecreateusercontroller';
import { MakeDeleteUserController } from '../../factories/makedeleteusercontroller';



export default (router: Router): void => {
    router.post('/create', async (req: Request, res: Response) => {

        const controller = MakeCreateUserController()
        const httpResponse = await controller.handle(req.body)
        res.json(httpResponse);
    })

    router.delete('/deleteuser', async (req: Request, res: Response) => {


        const deleteController = MakeDeleteUserController()
        const DeleteHttpResponse = await deleteController.handle(req.body)
        res.json(DeleteHttpResponse)

    })



}

