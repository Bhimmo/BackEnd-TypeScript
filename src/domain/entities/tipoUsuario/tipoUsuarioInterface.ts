import TipoUsuario from "./TipoUsuario"

export type propsTipoUsuario = {
    id: string,
    descricao: string
}

export default interface tipoUsuarioInterface {
    inserir(tipoUsuario: TipoUsuario): Promise<void>
    pegarTodos(): Promise<propsTipoUsuario[]>
    pegarUm(id: string): Promise<propsTipoUsuario>
}