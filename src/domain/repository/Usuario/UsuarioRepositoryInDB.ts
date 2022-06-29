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

    async deletar(id: string) {
        await UsuarioSchema.deleteOne({id});
    }

    async atualizar(id: string, props: any): Promise<void> {
        return UsuarioSchema
            .findByIdAndUpdate(id, props)
            .then((res: any) => res)
    }

    async pegarUm(id: string): Promise<propsUsuario> {
        return UsuarioSchema
            .findById(id)
            .then((res: any) => res)
    }
}