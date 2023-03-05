import { Response, Router, Request } from 'express';
import { MakeCreateUserController } from '../../factories/makecreateusercontroller';
import { MakeDeleteUserController } from '../../factories/makedeleteusercontroller';
import { MakeReadUserDataController } from '../../factories/makereaduserdatacontroller';
import { MakeUpdateUserDataController } from '../../factories/makeupdateuserdatacontroller';



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

    router.get('/getuser', async (req: Request, res: Response) => {


        const getUserDataController = MakeReadUserDataController()
        const getUserDataHttpResponse = await getUserDataController.handle(req.body)
        res.json(getUserDataHttpResponse)

    })

    router.post('/updateuser', async (req: Request, res: Response) => {


        const updateUserDataController = MakeUpdateUserDataController()
        const getUserDataHttpResponse = await updateUserDataController.handle(req.body)
        res.json(getUserDataHttpResponse)

    })



}

