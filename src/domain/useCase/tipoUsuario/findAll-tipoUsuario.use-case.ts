import TipoUsuarioRepositoryInDB from "../../repository/tipoUsuario/TipoUsuarioRepositoryInDB";

export default class FindAllTiposUsuarioUseCase {
    constructor(private tipoRepo: TipoUsuarioRepositoryInDB) {}

    async execute() {
        return this.tipoRepo.pegarTodos();
    }
}