import TipoUsuario from "../../entities/tipoUsuario/TipoUsuario";
import tipoUsuarioInterface from "../../repository/tipoUsuario/TipoUsuarioRepositoryInDB";

export default class CreateUsuarioUseCase {
    constructor(private tipoRepo: tipoUsuarioInterface) {}

    async execute(descricao: string) {
        const tipo = new TipoUsuario(descricao);

        return this.tipoRepo.inserir(tipo);
    }
}