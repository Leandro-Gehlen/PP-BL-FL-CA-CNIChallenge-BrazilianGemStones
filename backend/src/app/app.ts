import express, { Request, Response } from "express";
import dotenv from 'dotenv';

import { router } from "./routes";

dotenv.config()

const App = express();

App.use(express.json());

App.use(router)




export { App };
