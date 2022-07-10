import {Router} from "express";
import eventoRouter from "./evento";
import statusEvento from "./statusEvento";
import usuarioRouter from "./usuario";
import tipoUsuario from "./tipoUsuario";
import endereco from "./endereco";

const rotas = Router();
rotas.use('/evento', eventoRouter);
rotas.use('/status-evento', statusEvento);
rotas.use('/usuario', usuarioRouter);
rotas.use('/tipos-usuario', tipoUsuario);
rotas.use('/endereco', endereco);

export default rotas