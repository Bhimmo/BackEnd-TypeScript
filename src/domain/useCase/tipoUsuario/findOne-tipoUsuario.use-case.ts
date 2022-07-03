import TipoUsuarioRepositoryInDB from "../../repository/tipoUsuario/TipoUsuarioRepositoryInDB";

export default class FindOneTiposUsuarioUseCase {
    constructor(private tipoRepo: TipoUsuarioRepositoryInDB) {}

    async execute(id: string) {
        console.log(id);
        
        return this.tipoRepo.pegarUm(id);
    }
}