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
            .then((res: any) => res)
    }

    async deletar(id: string): Promise<void> {
        return Schemma
            .findByIdAndDelete(id)
            .then((res: any) => res)
    }

    async atualizar(id: string, descricao: string): Promise<void> {
        return Schemma
            .findByIdAndUpdate({
                _id: id
            }, {
                $set: {
                    descricao: descricao
                }
            })
            .then((res: any) => res)
    }
}