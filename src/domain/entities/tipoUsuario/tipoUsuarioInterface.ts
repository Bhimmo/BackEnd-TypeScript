export type propsTipoUsuario = {
    id: string,
    descricao: string,
    createdAt?: Date,
    updatedAt?: Date
}

export default interface tipoUsuarioInterface {
    pegarTodos(): Promise<propsTipoUsuario[]>
}