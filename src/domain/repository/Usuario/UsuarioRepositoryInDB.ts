import mongoose from "mongoose";
import UsuarioSchema from "../../../model/usuario/UsuarioSchema";
import usuarioInterface, { propsUsuario } from "../../entities/usuario/usuarioInterface";

const Schema = mongoose.model('Usuario', UsuarioSchema);

export default class UsuarioRepositoryInDB implements usuarioInterface {
    async inserir(user: propsUsuario): Promise<void> {
        return new Schema({
            _id: user.id,
            nome: user.nome,
            email: user.email,
            senha: user.senha,
            tipo: {
                _id: user.tipo.id,
                descricao: user.tipo.descricao
            },
            createdAt: new Date()
        })
        .save()
        .then((res: any) => res)
    }
    async pegarTodos(): Promise<propsUsuario[]> {
        return Schema.find();
    }

    async deletar(id: string) {
        await Schema.deleteOne({id});
    }

    async atualizar(id: string, props: any): Promise<void> {
        return Schema
            .findByIdAndUpdate(id, props)
            .then((res: any) => res)
    }

    async pegarUm(id: string): Promise<propsUsuario> {
        return Schema
            .findById(id)
            .then((res: any) => res)
    }
}