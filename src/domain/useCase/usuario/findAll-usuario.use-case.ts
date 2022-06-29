import usuarioInterface from "../../entities/usuario/usuarioInterface"

export default class FindAllUseCase {
    constructor(private userRepo: usuarioInterface) {}

    execute() {
        return this.userRepo.pegarTodos();
    }
}