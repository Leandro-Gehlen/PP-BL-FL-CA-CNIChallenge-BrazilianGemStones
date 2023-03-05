import express, { Request, Response } from "express";
import dotenv from 'dotenv';

import { router } from "./routes";

dotenv.config()

const App = express();

App.use(express.json());

App.use(router)

App.use((req: Request, res: Response) => {
    res.status(404).send("Page not found!")
})




export { App };
