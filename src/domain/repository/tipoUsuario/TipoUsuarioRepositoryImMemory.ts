import tipoUsuarioInterface, { propsTipoUsuario } from "../../entities/tipoUsuario/tipoUsuarioInterface";

export default class TipoUsuarioRepositoryInMemory implements tipoUsuarioInterface{
    items: propsTipoUsuario[] = [];

    async insert(props: propsTipoUsuario): Promise<void> {
        this.items.push(props);
    }

    async pegarTodos(): Promise<propsTipoUsuario[]> {
        return this.items;
    }

    async pegarUm(): Promise<propsTipoUsuario> {
        return this.items[0];
    }
}