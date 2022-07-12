import enderecoInterface from "../../entities/endereco/enderecoInterface";

type PropsEndereco = {
    logradouro: string,
    bairro: string,
    numero: string,
    cep: string,
    complemento?: string
}

export default class UpdateEnderecoUseCase {
    constructor(private enderecoRepo: enderecoInterface) {}

    async execute(id: string, props: PropsEndereco) {
        const enderecoSalvo = await this.enderecoRepo.pegarUm(id);

        if(!enderecoSalvo) {
            throw new Error("Endereco nao encontrado");
        }

        const enderecoAtu = {
            id: enderecoSalvo.id,
            logradouro: props.logradouro || enderecoSalvo.logradouro,
            bairro: props.bairro || enderecoSalvo.bairro,
            numero: props.numero || enderecoSalvo.numero,
            cep: props.cep || enderecoSalvo.cep,
            complemento: props.complemento || enderecoSalvo.complemento
        }

        await this.enderecoRepo.atualizar(enderecoAtu);
        return this.enderecoRepo.pegarUm(enderecoSalvo.id);
    }
}