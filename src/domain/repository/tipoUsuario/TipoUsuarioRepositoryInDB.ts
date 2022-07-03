import mongoose from "mongoose";
import TypeUsuarioSchema from "../../../model/usuario/TypeUsuarioSchema";
import TipoUsuario from "../../entities/tipoUsuario/TipoUsuario";
import tipoUsuarioInterface, { propsTipoUsuario } from "../../entities/tipoUsuario/tipoUsuarioInterface";

const Schemma = mongoose.model('TipoUsuario', TypeUsuarioSchema);

export default class TipoUsuarioRepositoryInDB implements tipoUsuarioInterface {
    async inserir(tipoUsuario: TipoUsuario): Promise<void> {
        return new Schemma({
            _id: tipoUsuario.getId,
            descricao: tipoUsuario.getDescricao
        }).save().then((res: any) => res);
    }
    async pegarTodos(): Promise<propsTipoUsuario[]> {
        return Schemma.find();
    }

    async pegarUm(id: string): Promise<propsTipoUsuario> {
        return Schemma
            .findById(id)
            .then((res: any) => {
                console.log(res);
                return res
            })
    }
}