import Usuario from "../../entities/usuario/Usuario";
import usuarioInterface, { propsUsuario } from "../../entities/usuario/usuarioInterface";

export default class UsuarioRepositoryInMemory implements usuarioInterface {
    items: propsUsuario[] = [];
    async inserir(user: propsUsuario): Promise<void> {
        this.items.push(user);
        //return user;
    }

    async pegarTodos(): Promise<propsUsuario[]> {
        return this.items;
    }
}