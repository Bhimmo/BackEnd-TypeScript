import {Router} from "express";
import eventoRouter from "./evento";

const rotas = Router();
rotas.use(eventoRouter);

export default rotas