export type propsEvento = {
    id: String,
    nome: String,
    descricao: String,
    dataInicio: Date,
    dataFinal: Date,
    valor: Number,
    status: {
        id: String,
        descricao: String
    },
    endereco?: {
        logradouro: String,
        bairro: String,
        numero: String,
        cep: String,
        complemento: String
    }
}

export default interface eventoInterface {
    inserir(evento: propsEvento): Promise<void>
    pegarTodos(): Promise<propsEvento[]>
    pegarUm(id: string): Promise<propsEvento>
}