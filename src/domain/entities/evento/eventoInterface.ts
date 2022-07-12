import { propsStatusEvento } from './../statusEvento/statusEventoInterface';

export type propsEvento = {
    id: string,
    nome: string,
    descricao: string,
    dataInicio: Date,
    dataFinal: Date,
    valor: Number,
    status: {
        id: string,
        descricao: string
    },
    endereco?: {
        id: string,
        logradouro: String,
        bairro: String,
        numero: String,
        cep: String,
        complemento?: String
    },
    ativo: Boolean
}

export default interface eventoInterface {
    inserir(evento: propsEvento): Promise<void>
    pegarTodos(): Promise<propsEvento[]>
    pegarUm(id: string): Promise<propsEvento>
    deletar(id: string): Promise<void>
    atualizar(evento: propsEvento): Promise<void>
}