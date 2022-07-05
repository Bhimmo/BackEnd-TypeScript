import {Router} from "express";
import eventoRouter from "./evento";
import statusEvento from "./statusEvento";
import usuarioRouter from "./usuario";
import tipoUsuario from "./tipoUsuario";

const rotas = Router();
rotas.use('/evento', eventoRouter);
rotas.use('/status-evento', statusEvento);
rotas.use('/usuario', usuarioRouter);
rotas.use('/tipos-usuario', tipoUsuario);

export default rotas