import tipoUsuarioInterface from "../../entities/tipoUsuario/tipoUsuarioInterface";

export default class FindAllTiposUsuarioUseCase {
    constructor(private tipoRepo: tipoUsuarioInterface) {}

    async execute() {
        return this.tipoRepo.pegarTodos();
    }
}