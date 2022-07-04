import usuarioInterface from "../../entities/usuario/usuarioInterface";

type UpdateProps = {
    nome?: string,
    email?: string,
    senha?: string,
    createdAt?: Date,
    updateAt?: Date
}

export default class UpdateUsuarioUseCase {
    constructor(private userRepo: usuarioInterface) {}

    async execute(id: string, props: UpdateProps) {
        //await this.userRepo.atualizar(id, props);
        //return this.userRepo.pegarUm(id);
    }
}