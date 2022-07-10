import EnderecoRepositoryInBD from "../../repository/endereco/EnderecoRepositoryInBD";

export default class FindAllEnderecoUseCase {
    constructor(private enderecoRepo: EnderecoRepositoryInBD) {}

    async execute() {
        return this.enderecoRepo.pegarTodos();
    }
}