export type propsUsuario = {
    id: string,
    nome: string,
    email: string,
    senha: string,
    createdAt?: string,
    updatedAt?: string
}

export default interface usuarioInterface {
    inserir(user: propsUsuario): Promise<void>
    pegarTodos(): Promise<propsUsuario[]>
}