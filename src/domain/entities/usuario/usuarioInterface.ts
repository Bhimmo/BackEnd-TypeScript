import Usuario from "./Usuario"

export type propsUsuario = {
    id: string,
    nome: string,
    email: string,
    senha: string,
    tipo: string,
    createdAt?: string
}

export default interface usuarioInterface {
    inserir(user: Usuario): Promise<void>
    pegarTodos(): Promise<propsUsuario[]>
    deletar(id: string): Promise<void>
    atualizar(user: Usuario): Promise<void>
    pegarUm(id: string): Promise<propsUsuario>
}