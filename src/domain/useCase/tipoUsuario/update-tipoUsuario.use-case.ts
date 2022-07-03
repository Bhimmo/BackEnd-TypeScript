import TipoUsuarioRepositoryInDB from "../../repository/tipoUsuario/TipoUsuarioRepositoryInDB";

export default class UpdateTiposUsuarioUseCase {
    constructor(private tipoRepo: TipoUsuarioRepositoryInDB) {}

    async execute(id: string, descricao: string) {
        try {
            await this.tipoRepo.atualizar(id, descricao);
            return this.tipoRepo.pegarUm(id);
        } catch (e) {
            throw new Error("Erro em atualizar");
        }
    }
}