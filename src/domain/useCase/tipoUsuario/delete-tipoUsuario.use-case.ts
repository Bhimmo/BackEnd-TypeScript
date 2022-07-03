import TipoUsuarioRepositoryInDB from "../../repository/tipoUsuario/TipoUsuarioRepositoryInDB";
import FindOneTiposUsuarioUseCase from "./findOne-tipoUsuario.use-case";

export default class DeleteTipoUsuarioUseCase {
    constructor(private tipoRe: TipoUsuarioRepositoryInDB) {}

    async execute(id: string) {
        const tipoUseCase = new FindOneTiposUsuarioUseCase(this.tipoRe);
        const tipo = await tipoUseCase.execute(id);

        if (!tipo) {
            throw new Error("Tipo nao encontrado");
        }
        return this.tipoRe.deletar(id);
    }
}