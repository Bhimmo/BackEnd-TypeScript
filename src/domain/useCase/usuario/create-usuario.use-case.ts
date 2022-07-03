import Usuario from "../../entities/usuario/Usuario";
import usuarioInterface from "../../entities/usuario/usuarioInterface";
import tipoRepositoryInDB from "../../repository/tipoUsuario/TipoUsuarioRepositoryInDB";

type CreateInput = {
    nome: string,
    email: string,
    senha: string,
    tipoId: string
}

export default class CreateUsuarioUseCase {
    constructor(private userRepo: usuarioInterface) {}

    async execute(props: CreateInput) {
        const tipoRepo = new tipoRepositoryInDB();
        let tipoInBD = await tipoRepo.pegarUm(props.tipoId);
        console.log(tipoInBD);
        
        if (!tipoInBD || tipoInBD == null) {
            new Error("Tipo nao encontrado");
        }

        //const usuario = new Usuario(props);
        //return this.userRepo.inserir(usuario.toJSON());
    }
}