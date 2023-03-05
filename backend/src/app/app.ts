import express, { Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config()

const App = express();

App.use(express.json());

App.get('/', (req: Request, res: Response) => {
    res.json({ msg: "server works!" })
})




export { App };
