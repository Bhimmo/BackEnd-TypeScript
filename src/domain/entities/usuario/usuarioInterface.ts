import Usuario, {PropsUser} from "./Usuario";

export default interface usuarioInterface {
    inserir(user: Usuario): Promise<void>
    pegarTodos(): Promise<Usuario[]>
}