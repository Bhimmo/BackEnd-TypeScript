import usuarioInterface from "../../entities/usuario/usuarioInterface";

export default class DeleteUsuarioUseCase {
    constructor(private userRepo: usuarioInterface) {}

    async execute(id: string) {
        await this.userRepo.deletar(id);
    }
}