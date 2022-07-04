import usuarioInterface from "../../entities/usuario/usuarioInterface";

export default class DeleteUsuarioUseCase {
    constructor(private userRepo: usuarioInterface) {}

    async execute(id: string) {
        const user = await this.userRepo.pegarUm(id);

        if (!user) {
            throw new Error("Usuario nao encontrado");
        }

        await this.userRepo.deletar(id);
    }
}