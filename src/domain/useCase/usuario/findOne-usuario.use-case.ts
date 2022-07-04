import UsuarioRepositoryInDB from "../../repository/Usuario/UsuarioRepositoryInDB";

export default class FindOneUsuarioUseCase {
    constructor(private userRepo: UsuarioRepositoryInDB) {}

    async execute(id: string) {
        return this.userRepo.pegarUm(id);
    }
}