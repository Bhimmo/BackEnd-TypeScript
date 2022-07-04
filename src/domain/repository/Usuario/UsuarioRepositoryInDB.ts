import mongoose from "mongoose";
import UsuarioSchema from "../../../model/usuario/UsuarioSchema";
import Usuario from "../../entities/usuario/Usuario";
import usuarioInterface, { propsUsuario } from "../../entities/usuario/usuarioInterface";

const Schema = mongoose.model('Usuario', UsuarioSchema);

export default class UsuarioRepositoryInDB implements usuarioInterface {
    async inserir(user: Usuario): Promise<void> {
        return new Schema({
            _id: user.getId,
            nome: user.getNome,
            email: user.getEmail,
            senha: user.getSenha,
            tipo: {
                _id: user.getTipoId,
                descricao: user.getTipoDescricao
            },
            createdAt: new Date()
        }).save().then((res: any) => res)
    }
    async pegarTodos(): Promise<propsUsuario[]> {
        return Schema.find();
    }

    async deletar(id: string) {
        await Schema.deleteOne({id});
    }

    async atualizar(user: Usuario): Promise<void> {
        return Schema
            .findByIdAndUpdate({_id: user.getId}, {
                $set: {
                    nome: user.getNome,
                    email: user.getEmail,
                    senha: user.getSenha,
                    tipo: {
                        _id: user.getTipoId,
                        descricao: user.getTipoDescricao
                    }
                }
            })
            .then((res: any) => res)
    }

    async pegarUm(id: string): Promise<propsUsuario> {
        return Schema
            .findById(id)
            .then((res: any) => res)
    }
}