import {Router} from "express";
import eventoRouter from "./evento";
import usuarioRouter from "./usuario";

const rotas = Router();
rotas.use('/evento', eventoRouter);
rotas.use('/usuario', usuarioRouter);

export default rotas