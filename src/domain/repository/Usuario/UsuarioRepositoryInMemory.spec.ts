import Usuario from "../../entities/usuario/Usuario"
import UsuarioRepositoryInMemory from "./UsuarioRepositoryInMemory";

describe('testes in memory', ()=> {
    let repositoryInMemory = new UsuarioRepositoryInMemory();
    const props = {
        nome: "Daniel",
        email: "daniel@gmail.com",
        senha: "123"
    }
    
    it('create', async () => {
        let usuario = new Usuario(props);
        await repositoryInMemory.inserir(usuario);

        expect(repositoryInMemory.items).toHaveLength(1);
        expect(repositoryInMemory.items).toStrictEqual([usuario]);
    })

    it('findAll', ( )=> {
        repositoryInMemory.items.forEach((item)=> {
            let props = item.getPropsUser;
            expect(props).toHaveProperty("nome");
            expect(props).toHaveProperty("email");
            expect(props).toHaveProperty("senha");
            expect(props).toStrictEqual(props);
        })
    })
})