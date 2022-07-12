export type propsEnd = {
    id: string,
    logradouro: string,
    bairro: string,
    numero: string,
    cep: string,
    complemento?: string
}

export default interface enderecoInterface {
    inserir(props: propsEnd): Promise<void>
    pegarUm(id: string): Promise<propsEnd>
    pegarTodos(): Promise<propsEnd[]>
    atualizar(props: propsEnd): Promise<void>
}