import EnderecoRepositoryInBD from "../../repository/endereco/EnderecoRepositoryInBD";

export default class FindOneEnderecoUseCase {
    constructor(private enderecoRepo: EnderecoRepositoryInBD) {}

    async execute(id: string) {
        return this.enderecoRepo.pegarUm(id);
    }
}