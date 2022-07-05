export type propsStatusEvento = {
    id: string,
    descricao: string
}

export default interface statusEventoInterface {
    pegarTodos(): Promise<propsStatusEvento[]>
    pegarUm(id: string): Promise<propsStatusEvento>
}