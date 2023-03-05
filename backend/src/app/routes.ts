import { Router, Request, Response } from "express";

const router = Router()


router.get('/', (req: Request, res: Response) => {
    res.json({ msg: "Routes works", })
})
router.post('/newuser', (req: Request, res: Response) => {
    res.json({ msg: 'new user created' })
})

export { router }