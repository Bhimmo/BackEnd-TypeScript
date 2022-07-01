import TypeUsuarioSchema from "../../../model/usuario/TypeUsuarioSchema";
import tipoUsuarioInterface, { propsTipoUsuario } from "../../entities/tipoUsuario/tipoUsuarioInterface";

export default class TipoUsuarioRepositoryInDB implements tipoUsuarioInterface {
    async pegarTodos(): Promise<propsTipoUsuario[]> {
        return TypeUsuarioSchema.find();
    }
}