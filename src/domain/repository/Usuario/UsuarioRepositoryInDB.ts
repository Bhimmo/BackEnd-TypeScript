import mongoose from "mongoose";
import Usuario from "../../entities/usuario/Usuario";
import usuarioInterface from "../../entities/usuario/usuarioInterface";
import UsuarioSchema from "../../../model/usuario/UsuarioSchema";

export default class UsuarioRepositoryInDB implements usuarioInterface {
    async inserir(user: Usuario): Promise<void> {
        const novoUsuario = new UsuarioSchema({
            _id: new mongoose.Types.ObjectId(),
            nome: user.propsUser.nome,
            email: user.propsUser.email,
            senha: user.propsUser.senha
        });

        return novoUsuario
            .save()
            .then( (res: any) => res)
            .catch( (err: any) => console.log(err))
        
    }
    async pegarTodos(): Promise<Usuario[]> {
        return UsuarioSchema
            .find()
            .exec()
            .then( (res: any) => res )
            .catch( (err: any) => console.log(err))
    }
}