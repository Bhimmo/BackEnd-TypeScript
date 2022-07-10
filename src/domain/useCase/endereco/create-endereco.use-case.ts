import Endereco from "../../entities/endereco/Endereco";
import EnderecoRepositoryInBD from "../../repository/endereco/EnderecoRepositoryInBD";

type propsEndereco = {
    logradouro: string,
    bairro: string,
    numero: string,
    cep: string,
    complemento?: string
}

export default class CreateEnderecoUseCase {
    constructor(private enderecoRepo: EnderecoRepositoryInBD) {}

    async execute(props: propsEndereco) {
        const endereco = new Endereco(props.logradouro, props.bairro, props.numero, props.cep, props.complemento);
        return this.enderecoRepo.inserir({
            id: endereco.id,
            logradouro: endereco.logradouro,
            bairro: endereco.bairro,
            numero: endereco.numero,
            cep: endereco.cep,
            complemento: endereco.complemento
        });
    }
}