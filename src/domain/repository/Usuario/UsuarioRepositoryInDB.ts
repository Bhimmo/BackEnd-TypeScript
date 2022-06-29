import usuarioInterface, { propsUsuario } from "../../entities/usuario/usuarioInterface";
import UsuarioSchema from "../../../model/usuario/UsuarioSchema";

export default class UsuarioRepositoryInDB implements usuarioInterface {
    async inserir(user: propsUsuario): Promise<void> {
        const usuario = new UsuarioSchema({
            _id: user.id,
            nome: user.nome,
            email: user.email,
            senha: user.senha,
            createdAt: new Date()
        });

        return usuario
            .save()
            .then((res: any) => res)
    }
    async pegarTodos(): Promise<propsUsuario[]> {
        return UsuarioSchema.find();
    }
}