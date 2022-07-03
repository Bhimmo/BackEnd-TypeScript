import TipoUsuario from "../../entities/tipoUsuario/TipoUsuario";
import TipoUsuarioRepositoryInMemory from "./TipoUsuarioRepositoryImMemory"

describe('testes tipo usuario in memory', () => {
    const tipoRepo = new TipoUsuarioRepositoryInMemory();

    it('criacao', () => {
        const tipo = new TipoUsuario("admin");
        let props = {
            id: tipo.getId,
            descricao: tipo.getDescricao
        }
        tipoRepo.insert(props);

        expect(tipoRepo.items).toHaveLength(1);
        expect(tipoRepo.items[0]).toHaveProperty("id");
        expect(tipoRepo.items[0].descricao).toStrictEqual("admin")
    })
})