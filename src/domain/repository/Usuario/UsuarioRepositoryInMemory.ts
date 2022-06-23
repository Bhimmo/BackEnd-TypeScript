import Usuario from "../../entities/usuario/Usuario";
import usuarioInterface from "../../entities/usuario/usuarioInterface";

export default class UsuarioRepositoryInMemory implements usuarioInterface {
    items: Usuario[] = [];
    async inserir(user: Usuario): Promise<void> {
        this.items.push(user);
    }

    async pegarTodos(): Promise<Usuario[]> {
        return this.items;
    }
}