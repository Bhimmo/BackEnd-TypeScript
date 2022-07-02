import Usuario from "../../entities/usuario/Usuario";
import usuarioInterface from "../../entities/usuario/usuarioInterface";

type CreateInput = {
    nome: string,
    email: string,
    senha: string,
    tipo: {
        "id": string,
        "descricao": string
    },
    createdAt?: string,
    updatedAt?: string
}

export default class CreateUsuarioUseCase {
    constructor(private userRepo: usuarioInterface) {}

    async execute(props: CreateInput) {
        const usuario = new Usuario(props);
        return this.userRepo.inserir(usuario.toJSON());
    }
}