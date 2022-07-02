export type propsUsuario = {
    id: string,
    nome: string,
    email: string,
    senha: string,
    tipo: {
        "id": string,
        "descricao": string
    }
    createdAt?: string,
    updatedAt?: string
}

export default interface usuarioInterface {
    inserir(user: propsUsuario): Promise<void>
    pegarTodos(): Promise<propsUsuario[]>
    deletar(id: string): Promise<void>
    atualizar(id: string, props: any): Promise<void>
    pegarUm(id: string): Promise<propsUsuario>
}