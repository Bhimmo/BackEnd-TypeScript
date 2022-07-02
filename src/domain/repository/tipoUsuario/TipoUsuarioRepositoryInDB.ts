import mongoose from "mongoose";
import TypeUsuarioSchema from "../../../model/usuario/TypeUsuarioSchema";
import tipoUsuarioInterface, { propsTipoUsuario } from "../../entities/tipoUsuario/tipoUsuarioInterface";

const Schemma = mongoose.model('TipoUsuario', TypeUsuarioSchema);

export default class TipoUsuarioRepositoryInDB implements tipoUsuarioInterface {
    async pegarTodos(): Promise<propsTipoUsuario[]> {
        return Schemma.find();
    }
}