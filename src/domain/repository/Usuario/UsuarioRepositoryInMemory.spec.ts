import Usuario from "../../entities/usuario/Usuario"
import UsuarioRepositoryInMemory from "./UsuarioRepositoryInMemory";

describe('testes in memory', ()=> {
    let repositoryInMemory = new UsuarioRepositoryInMemory();
    const props = {
        nome: "Daniel",
        email: "daniel@gmail.com",
        senha: "123"
    }
    
    it('create', async () => {})

    it('findAll', ( )=> {
        repositoryInMemory.items.forEach((item)=> {
            expect(item).toHaveProperty("id");
            expect(item).toHaveProperty("nome");
            expect(item).toHaveProperty("email");
            expect(item).toHaveProperty("senha");
        })
    })
})