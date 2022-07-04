import Usuario from "../../entities/usuario/Usuario";
import TipoUsuarioRepositoryInDB from "../../repository/tipoUsuario/TipoUsuarioRepositoryInDB";
import UsuarioRepositoryInDB from "../../repository/Usuario/UsuarioRepositoryInDB";
import FindOneTiposUsuarioUseCase from "../tipoUsuario/findOne-tipoUsuario.use-case";

type UpdateProps = {
    nome: string,
    email: string,
    senha: string,
    tipoId: string,
    createdAt?: Date
}

export default class UpdateUsuarioUseCase {
    constructor(private userRepo: UsuarioRepositoryInDB) {}

    async execute(id: string, props: UpdateProps) {
        const tipoRepo = new TipoUsuarioRepositoryInDB();
        const tipoUseCase = new FindOneTiposUsuarioUseCase(tipoRepo);
        const tipo = await tipoUseCase.execute(props.tipoId);
        const buscarOne = await this.userRepo.pegarUm(id);

        if (!tipo) {
            throw new Error("Tipo nao encontrado");
        } else if (!buscarOne) {
            throw new Error("Usuario nao encontrado");
        }

        const user = new Usuario(props.nome, props.email, props.senha, {id: tipo.id, descricao: tipo.descricao}, id);
        await this.userRepo.atualizar(user);
        return this.userRepo.pegarUm(id);
    }
}