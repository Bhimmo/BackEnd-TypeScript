import Usuario from "../../entities/usuario/Usuario";
import tipoRepositoryInDB from "../../repository/tipoUsuario/TipoUsuarioRepositoryInDB";
import UsuarioRepositoryInDB from "../../repository/Usuario/UsuarioRepositoryInDB";

type CreateInput = {
    nome: string,
    email: string,
    senha: string,
    tipoId: string
}

export default class CreateUsuarioUseCase {
    constructor(private userRepo: UsuarioRepositoryInDB) {}

    async execute(props: CreateInput) {
        const tipoRepo = new tipoRepositoryInDB();
        let tipoInBD = await tipoRepo.pegarUm(props.tipoId);
        
        if (!tipoInBD) {
            throw new Error("Tipo nao encontrado");
        }

        const usuario = new Usuario(props.nome, props.email, props.senha, tipoInBD.descricao);
        return this.userRepo.inserir(usuario);
    }
}